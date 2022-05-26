import { useState, useEffect } from 'react';
import { fetchTrending } from 'services/ApiService'
import { Link } from "react-router-dom";


export const HomePage = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
    fetchTrending()
      .then(movies => {
        if (movies.results.length === 0) {
          return Promise.reject(
            new Error(`Something was wrong after request`)
          );
        }
          setMovies(movies.results);
          console.log(movies.results)
      })
      .catch(error => {
        console.log(error.message);
      });
    }, []);
    
    return (
        <>
            <h1>Trending today</h1>

            <ul>
                {movies.map((movie) => (
                        <li key={movie.id}>
                        <Link to={`movies/${movie.id}`}>{movie.original_title ? movie.original_title : movie.original_name}</Link>
                        </li>
                    )
                ) }
            </ul>
        </>
    )
}