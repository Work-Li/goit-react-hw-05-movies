// import { useParams } from "react-router-dom";
import BackBtn from "../components/BackBtn/BackBtn";
import {  Outlet, useLocation, useParams  } from 'react-router-dom';
import {useState, useEffect } from 'react';
import * as API from '../services/API';

export default function MovieDetailsPage () {
    const location = useLocation();
   
    const {movieId} = useParams();
    const [movie, setMovie] = useState(null);
    const [genres, setGenres] = useState('');

    useEffect(() => {
        API
        .fetchMovieDetais(movieId)
        .then(m => m.results)
        .then(setMovie);
    }, [movieId]); 




    return (
        <> MovieDetailsPage
        <BackBtn/>
        {movie && (
            <>
                <img src={movie.poster_path} alt={movie.poster}/> */
                <h2>{movie.original_title}</h2>
                <p>User Score: {movie.vote_average}</p>
                <h3>Overview </h3>
                <p>{movie.overview}</p>
                <h3>Genres</h3>
                <p>{genres}</p>
                <h4>Additional information</h4>
                <ul>
                    <li>Cast</li>
                    <li>Reviews</li>
                </ul>
            </>
        )}


        <Outlet />
        </>
    )
}