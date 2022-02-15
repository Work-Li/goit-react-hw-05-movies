import { useState, useEffect } from 'react';
import * as API from '../services/API';
// import { fetchTrendingMovies } from '../services/API';
import { Link} from 'react-router-dom'
// import {Spinner} from './components/Loader/Loader';
import s from './HomePage.module.css'

export default function HomePage () {
    const [movies, setMovies] = useState(null);
    // const { url } = useRouteMatch();
    useEffect(() => {
        API
        .fetchTrendingMovies()
        .then(m => m.results)
        .then(setMovies);
    }, []); 

    return (
        <> <h1 className={s.title}>Day's trending movies</h1>
            {movies && (<ul className={s.list}>
                {movies.map(movie => {
                    return (<li key={movie.id} className={s.link}> <Link to={`${movie.id}`}>{movie.title}</Link></li>)
                })}
            </ul>)}
        </>
    );
}
// /trending/get-trending{movies, path}