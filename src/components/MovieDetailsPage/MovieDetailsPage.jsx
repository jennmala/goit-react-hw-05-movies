import { Outlet, useParams, useNavigate, Link } from "react-router-dom";
import { useState, useEffect, Suspense } from 'react';

import { fetchMovieById } from 'services/ApiService'

export default function MovieDetailsPage() {
    let navigate = useNavigate();
    const { movieId } = useParams();
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        fetchMovieById(movieId).then(setMovie);
    }, [movieId])

    return (
        <>
        <button onClick={() => navigate(-1, { replace: true })}>go back</button>
        { movie &&
        <>   
            
            <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} width="20" alt="" />

            <h2>{movie.original_title ? movie.original_title : movie.original_name} 
                <span>({movie.release_date ? movie.release_date.split('-')[0] : movie.first_air_date.split('-')[0]})</span>
            </h2>

            <p><span>User score: </span>
                {`${Math.round(movie.vote_average * 10)}%`}
            </p>
            
            <h3>Overview</h3>
            <p>{movie.overview}</p>
            
            { movie.genres && 
            <>
                <h3>Genres</h3>            
                <p>{movie.genres.map((genre) => genre.name).join(', ')}</p>
            </>                             
            }

            <h3>Additional information</h3>
            <ul>
                <li><Link to='cast'>Cast</Link></li>
                <li><Link to='reviews'>Reviews</Link></li>
            </ul>

            <Suspense fallback={<p>Loading...</p>}>
                <Outlet context={[movieId]}/>
            </Suspense>
        </> 
        }    
        </>   
    )
}