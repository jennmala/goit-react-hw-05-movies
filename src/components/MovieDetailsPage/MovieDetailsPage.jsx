import { Outlet, useParams } from "react-router-dom";
import { useState, useEffect } from 'react';

import { fetchMovieById } from 'services/ApiService'

export const MovieDetailsPage = () => {
    const { movieId } = useParams();
    const [movie, setMovie] = useState(null)

    useEffect(() => {
        fetchMovieById(movieId).then(setMovie);
    }, [movieId])

    return (
        movie &&
        <>
            {console.log(movie)}

            <h2>{movie.original_title} <span>({movie.release_date.split('-')[0]})</span></h2>
            <p><span>User score: </span>{`${movie.vote_average * 10} %`}</p>
            
            {/* <img src={movie.homepage + movie.poster_path} alt="" /> */}
            <Outlet />
        </>        
    )
}