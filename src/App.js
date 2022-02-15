import './App.css';
import { Route, Routes } from 'react-router-dom';
import Container from './components/Container/Container';
import Navigation from './components/Navigation/Navigation';
import HomePage from './views/HomePage';
import MoviesPage from './views/MoviesPage';
import NotFoundView from './views/NotFoundView';
// import SearchForm from './components/SearchForm/SearchForm';

function App() {
return (
    <Container>
        
        <Routes>
            <Route path='/' element={<Navigation/>}>
                <Route index  element = {<HomePage />} />
                <Route path="/movies" element ={<MoviesPage />}/>
                    {/* <Route index element = {<SearchForm />}/>  */}

                

                <Route path='*' element={<NotFoundView />} />
           
            </Route>
        </Routes>
    </Container>
)
//  <div className="App">TEST</div>;
}

export default App;

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