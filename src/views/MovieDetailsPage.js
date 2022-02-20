// import { useParams } from "react-router-dom";
import BackBtn from "../components/BackBtn/BackBtn";
import {  Outlet, useLocation, useParams  } from 'react-router-dom';
import {useState, useEffect, lazy, Suspense } from 'react';
import * as API from '../services/API';

const MovieCard = lazy(() =>
  import(
    '../components/MovieCard/MovieCard.js' /* webpackChunkName: "movie-card" */
  ),
);

export default function MovieDetailsPage () {
    const location = useLocation();
   
    const {movieId} = useParams();
    const [movie, setMovie] = useState(null);
    const [genres, setGenres] = useState('');

    useEffect(() => {
        API
        .fetchMovieDetais(movieId)
        .then(setMovie);
    }, [movieId]); 

    
  useEffect(() => {
    if (!movie) {
      return;
    }
    let names = movie.genres;
    const string = names.map(name => name.name).join(', ');
    setGenres(string);
  }, [movie]);


    return (
        <> 
            <BackBtn location={location}/>
            <Suspense fallback={<h4>Loading...</h4>}>
            {movie && <MovieCard movie={movie} genres={genres} />}
            </Suspense>
            <Outlet />

        
        </>
    );
}