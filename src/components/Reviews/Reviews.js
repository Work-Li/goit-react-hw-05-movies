import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as API from '../../services/API';
import s from './Reviews.module.css';

export default function Reviews () {
    let { movieId } = useParams();
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        API.FetchMovieReviews(movieId).then(r => {setReviews(r.results);});
    }, [movieId]);

    return (
        <> 
            <h5 className={s.title}>Reviews</h5>
            <ul>
                {reviews.length !==0 ? (reviews.map(({ id, author, content }) => (
                <li key={id} className={s.review}>
                    <p className={s.author}>Author: {author}</p>
                    <p className={s.text}>{content}</p>
                </li>
                ))) : (<p>We haven't any reviews yet</p>)}
            </ul>
        
        
        </>
    )
}

