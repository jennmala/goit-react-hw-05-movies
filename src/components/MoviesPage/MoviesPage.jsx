import { useState, useEffect } from "react";
import { fetchMoviesByKeyword } from 'services/ApiService';
import { useSearchParams } from "react-router-dom";
import slugify from "slugify";
import { ListWrap, ListItem, LinkItem } from '../HomePage/HomePage.styled';
import { FormWrap, Input, Button } from './MoviesPage.styled';

// useLocation(), useHistory() history.push('/....')

const makeSlug = (string) => slugify(string, { lower: true });

export default function MoviesPage() {
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
            <FormWrap onSubmit={onSubmit}>
                <Input onChange={onInputChange} type="text" value={keyword} />
                <Button type="submit" value="Search" />
            </FormWrap>

            { movies && 
                <ListWrap>
                    {movies.map((movie) => (
                            <ListItem key={movie.id}>
                                <LinkItem to={`${makeSlug(`${movie.original_title} ${movie.id}`)}`}>
                                    {movie.original_title ? movie.original_title : movie.original_name}
                                </LinkItem>
                            </ListItem>
                        )
                    ) }
                </ListWrap>
            }
        </>
    )
}  