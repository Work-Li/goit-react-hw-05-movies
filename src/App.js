import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Container from './components/Container/Container';
import Navigation from './components/Navigation/Navigation';


const HomePage = lazy(() =>
  import('./views/HomePage.js' /* webpackChunkName: "home-view" */),
);
const MoviesPage = lazy(() =>
  import('./views/MoviesPage.js' /* webpackChunkName: "movies-page" */),
);

const MovieDetailsPage = lazy(() =>
  import(
    './views/MovieDetailsPage.js' /* webpackChunkName: "movie-details-page" */
  ),
);

const NotFoundView = lazy(() =>
  import('./views/NotFoundView.js' /* webpackChunkName: "not-found-view" */),
);

const Cast = lazy(() =>
  import('./components/Cast/Cast.js' /* webpackChunkName: "cast" */),
);
const Reviews = lazy(() =>
  import('./components/Reviews/Reviews.js' /* webpackChunkName: "reviews" */),
);


export default  function App() {
return (
    <Container>
        <Navigation/>
        <Suspense fallback={<h4>Loading...</h4>}>
            <Routes>
                <Route path="/" element={<HomePage />}/>
                <Route path="/movies" element ={<MoviesPage />}/>
                <Route path="/movies/:movieId" element ={<MovieDetailsPage />} >  
                    <Route path="cast" element={<Cast />}/>
                    <Route path="reviews" element={<Reviews />}/>
                </Route>
               
                <Route path="*" element={<NotFoundView />} />
                
            </Routes>
        </Suspense>
    </Container>
)
//  <div className="App">TEST</div>;
}


