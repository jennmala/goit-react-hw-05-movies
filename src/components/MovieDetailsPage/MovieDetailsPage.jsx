import { Outlet, useParams, useNavigate } from "react-router-dom";
import { useState, useEffect, Suspense } from 'react';

import { fetchMovieById } from 'services/ApiService';
import { Title, Button, Poster, Flex, Description, Addition, ListWrap, ListItem, LinkItem } from './MovieDetailsPage.styled';

export default function MovieDetailsPage() {
    
    let navigate = useNavigate();
    const { slug } = useParams();
    const movieId = slug.match(/[a-z0-9]+$/)[0];

    const [movie, setMovie] = useState(null);


    useEffect(() => {        
        fetchMovieById(movieId).then(setMovie);
    }, [movieId])

    return (
        <>
            <Button onClick={() => navigate(-1, { replace: true })}>go back</Button>

            { movie &&
                <>   
                    
                    <Flex>

                        <Poster src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} width="20" alt="" />

                        <Description>
                            <Title>{movie.original_title ? movie.original_title : movie.original_name}  
                                <span> ({movie.release_date ? movie.release_date.split('-')[0] : movie.first_air_date.split('-')[0]})</span>
                            </Title>

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
                        </Description>
                    </Flex>
                    
                    <Addition>
                        <h3>Additional information</h3>
                        <ListWrap>
                            <ListItem><LinkItem to='cast'>Cast</LinkItem></ListItem>
                            <ListItem><LinkItem to='reviews'>Reviews</LinkItem></ListItem>
                        </ListWrap>
                    </Addition>

                    <Suspense fallback={<p>Loading...</p>}>
                        <Outlet context={[movieId]}/>
                    </Suspense>
                </> 
            } 

            {!movie && <div>some problem with api</div>}   
        </>   
    )
}