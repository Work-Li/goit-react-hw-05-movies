import { useState, useEffect } from 'react';
import * as API from '../services/API';
import MoviesList from '../components/MoviesList/MoviesList';

// import {Spinner} from './components/Loader/Loader';
import s from './HomePage.module.css'

export default function HomePage () {
    const [movies, setMovies] = useState(null);
    
    useEffect(() => {
        API
        .fetchTrendingMovies()
        .then(m => m.results)
        .then(setMovies);
    }, []); 

    return (
        <> <h1 className={s.title}>Day's trending movies</h1>
            {movies && <MoviesList movies={movies} />}
        </>
    );
}
