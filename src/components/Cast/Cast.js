import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as API from '../../services/API';
import s from './Cast.module.css';



export default function Cast () {
    let { movieId } = useParams();
    const [cast, setCast] = useState([]);

    useEffect(() => {
        API.FetchMovieCredits(movieId)
            .then(r => {setCast(r.cast);});
    }, [movieId]);


    return (
        <> <h5 className={s.title}>Cast</h5>
        <ul className={s.cast}>
            {cast.map(({ id, profile_path, name, character }) => (
                <li className={s.person}key={id}>
                    <img src={`https://image.tmdb.org/t/p/w300${profile_path}`} alt={{ name }} className={s.image}/> 
                    <p className={s.text}>Character: {character}</p>
                    <p className={s.text}>{name}</p>
                </li>
        ))}
        </ul>
        
        </>
    )
}




