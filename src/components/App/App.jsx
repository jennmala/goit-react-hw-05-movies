import { Routes, Route } from "react-router-dom";

import { Navigation } from 'components/Navigation/Navigation';
import { HomePage } from "components/HomePage/HomePage";
import { MoviesPage } from "components/MoviesPage/MoviesPage";
import { MovieDetailsPage } from "components/MovieDetailsPage/MovieDetailsPage";
import { Reviews } from "components/Reviews/Reviews";
import { Cast } from "components/Cast/Cast";


export const App = () => {
    return (
        <>
            < Navigation />

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

                {/* TODO */}
                {/* <Route element={<h1>not found</h1>} /> */}
                        
            </Routes>
        </>        
    )
}


// LsyQzT@59PjTC6R psw for api malayevheniia
