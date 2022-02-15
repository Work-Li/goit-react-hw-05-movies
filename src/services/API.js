
// 16600ad2b0f485ce73541bf9aac86f47
// https://api.themoviedb.org/3/movie/550?api_key=16600ad2b0f485ce73541bf9aac86f47


// // /trending/get-trending 
// список самых популярных фильмов на сегодня для создания коллекции на главной странице.
// // /search/search-movies 
// поиск кинофильма по ключевому слову на странице фильмов.
// // /movies/get-movie-details 
// запрос полной информации о фильме для страницы кинофильма.
// // /movies/get-movie-credits 
// запрос информации о актёрском составе для страницы кинофильма.
// // /movies/get-movie-reviews 
// запрос обзоров для страницы кинофильма.

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '16600ad2b0f485ce73541bf9aac86f47';

async function fetchWithErrorHandling(url = '', config = {}) {
    const response = await fetch(url, config);
    return response.ok
      ? await response.json()
      : Promise.reject(new Error('Not found'));
}

export function fetchTrendingMovies() {
    return fetchWithErrorHandling(`${BASE_URL}/trending/movie/day?api_key=${API_KEY}`, );
}

export function fetchMovieDetais(movieId) {
    return fetchWithErrorHandling(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`, );
}

export function FetchMovieReviews(movieId) {
    return fetchWithErrorHandling(
      `${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`,
    );
}
export function FetchMovieCredits(movieId) {
    return fetchWithErrorHandling(
      `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}`,
    );
}

export function FetchSearchFilms(query) {
    return fetchWithErrorHandling(
      `${BASE_URL}/search/movie?query=${query}&api_key=${API_KEY}&include_adult=false`,
    );
}