import { useState } from "react";
import { fetchMoviesByKeyword } from 'services/ApiService';
import { Link, useSearchParams } from "react-router-dom";
import { useEffect } from "react";

export const MoviesPage = () => {
    const [search, setSearch] = useSearchParams();
    const [keyword, setKeyword] = useState('');
    const [movies, setMovies] = useState(null);

    useEffect(() => {
        if (!search.get('query')) {
            setMovies(null);
            return;
        }
        fetchMoviesByKeyword(search.get('query')).then(response => setMovies(response.results));
    }, [search])

    const onInputChange = e => { 
        setKeyword(e.currentTarget.value);
    }

    const onSubmit = e => {
        e.preventDefault();
        if (!keyword.trim()) {
            return;
        }
        setSearch({ query: keyword });
        setKeyword('');
    }

    return (
        <>
            <form onSubmit={onSubmit}>
                <input onChange={onInputChange} type="text" value={keyword} />
                <input type="submit" value="Search" />
            </form>

            { movies && 
                <ul>
                    {movies.map((movie) => (
                            <li key={movie.id}>
                            <Link to={`${movie.id}`}>{movie.original_title ? movie.original_title : movie.original_name}</Link>
                            </li>
                        )
                    ) }
                </ul>
            }
        </>
    )
}