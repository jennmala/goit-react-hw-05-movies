import { useState, useEffect } from 'react';
import { fetchTrending } from 'services/ApiService';
import slugify from "slugify";
import { Title, ListWrap, ListItem, LinkItem } from './HomePage.styled';

const makeSlug = (string) => slugify(string, { lower: true });


export default function HomePage() {
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
            <Title>Trending today</Title>

            <ListWrap>
                {movies.map((movie) => (
                        <ListItem key={movie.id}>
                          <LinkItem to={`/movies/${makeSlug(`${movie.original_title ? movie.original_title : movie.original_name} ${movie.id}`)}`}>
                            {movie.original_title ? movie.original_title : movie.original_name}
                          </LinkItem>
                        </ListItem>
                    )
                ) }
            </ListWrap>
        </>
    )
}

// export default HomePage;