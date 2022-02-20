import s from './MoviesList.module.css';

import { Link, useLocation } from 'react-router-dom';

export default function MoviesList({ movies }) {
    const location = useLocation();
    
    return ( 
        <ul className={s.list}> 
            {movies.map(movie => {
                return (
                    <li key={movie.id} className={s.link}> 
                        <Link to={`/movies/${movie.id}`} 
                            state={{ from: location }} 
                            
                            >{movie.title}
                        </Link>
                    </li>
                )
            })}
        </ul>
    )
}