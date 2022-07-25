import { lazy, Suspense } from 'react';
import { Routes, Route } from "react-router-dom";

import { Navigation } from 'components/Navigation/Navigation';
// import { HomePage } from 'components/HomePage/HomePage';
// import { MoviesPage } from 'components/MoviesPage/MoviesPage';
// import { MovieDetailsPage } from 'components/MovieDetailsPage/MovieDetailsPage';
// import Reviews from 'components/Reviews/Reviews';
// import Cast from 'components/Cast/Cast';

// Intersection Observer
// Eager loading
// quicklink

// webpack magic comments
const HomePage = lazy(() => import('components/HomePage/HomePage.jsx' /* webpackChunkName: "home-view" */));
const MoviesPage = lazy(() => import('components/MoviesPage/MoviesPage.jsx' /* webpackChunkName: "movies-page" */));
const MovieDetailsPage = lazy(() => import('components/MovieDetailsPage/MovieDetailsPage.jsx' /* webpackChunkName: "movie-details-page" */));
const Reviews = lazy(() => import('components/Reviews/Reviews.jsx' /* webpackChunkName: "reviews" */));
const Cast = lazy(() => import('components/Cast/Cast.jsx' /* webpackChunkName: "cast" */));


export const App = () => {
    return (
        <>
            < Navigation />

            <Suspense fallback={<p>Loading...</p>}>
            <Routes>
                <Route
                    path="/"
                    element={<HomePage />} />
                
                <Route
                    path="movies"
                    element={<MoviesPage />}>
                </Route>
                
                <Route
                    path="movies/:movieId"
                    element={<MovieDetailsPage />} >
                    <Route path="cast" element={<Cast />} />
                    <Route path="reviews" element={<Reviews />} />
                </Route>

                <Route path='*' element={<h1>not found</h1>} />
                        
            </Routes>
            </Suspense>
        </>        
    )
}


// LsyQzT@59PjTC6R psw for api malayevheniia
