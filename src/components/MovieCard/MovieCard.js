import s from './MovieCard.module.css';

import { Link, useLocation } from 'react-router-dom';

export default function MovieCard({ movie, genres }) {
    const location = useLocation();
    return (
      <>
        <div className={s.movie__card}>
          <div className={s.movie__wrapper}>
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.poster}/> 
          </div>
            
          <div className={s.movie__data}>
            <h2 className={s.movie__title}>{movie.original_title}</h2>
            <p className={s.text}>User Score: {movie.vote_average}</p>
            <h3>Overview </h3>
            <p className={s.text}>{movie.overview}</p>
            <h3>Genres</h3>
            <p className={s.text}>{genres}</p>
          </div>
         
         
        </div>  
        <div className={s.movie__options}>
              <h4>Additional information</h4>
              <ul className={s.list}>
                  <li className={s.link}><Link to={`/movies/${movie.id}/cast`} state={location.state}>Cast</Link> </li>
                  <li className={s.link}><Link to={`/movies/${movie.id}/reviews`} state={location.state}>Reviews</Link></li>
              </ul>
        </div>  
      </>
    );
  }