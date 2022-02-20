import { useState, useEffect } from 'react';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import SearchForm from '../components/SearchForm/SearchForm';
import * as API from '../services/API';
import MoviesList from '../components/MoviesList/MoviesList';

export default function MoviesPage ({request}) {
    const [query, setQuery] = useState('');
    const [searched, setSearched] = useState([]);
    const location = useLocation();
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();

    const search = searchParams.get('query');

    useEffect(() => {
        if (query === '') {
          return;
        }

        API
        .FetchSearchingMovies(query)
        .then(r => r.results)
        .then(setSearched);
    }, [query]);

    useEffect(() => {
        if (search === null) {
          return;
        }
        API
          .FetchSearchingMovies(search)
          .then(r => r.results)
          .then(setSearched);
      }, [search]);

    const handleFormSubmit = request => {
        setQuery(request);
        navigate({ ...location, search: `query=${request}` });
      };

    return (
        <>
            <SearchForm onSubmit={handleFormSubmit}/>
            {searched && <MoviesList movies={searched} />}
        </>
    )
}
