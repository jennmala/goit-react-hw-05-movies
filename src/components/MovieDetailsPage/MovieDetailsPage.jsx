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
            
            <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} width="10" alt="" />

            <h2>{movie.original_title ? movie.original_title : movie.original_name} 
                <span>({movie.release_date ? movie.release_date.split('-')[0] : movie.first_air_date.split('-')[0]})</span>
            </h2>

            <p><span>User score: </span>
                {`${movie.vote_average * 10} %`}
            </p>
            
            <h3>Overview</h3>
            <p>{movie.overview}</p>
            
            { movie.genres && 
            <>
                <h3>Genres</h3>            
                <p>{movie.genres.map((genre) => genre.name).join(', ')}</p>
            </>                             
            }

            <Outlet />
        </>        
    )
}