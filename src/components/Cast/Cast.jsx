import { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import { fetchCast } from 'services/ApiService';
import { ListWrap, ListItem, Poster, Descr } from './Cast.styled';
import placeholder from 'placeholder.jpg';

export default function Cast() {
    const [movieId] = useOutletContext();
    const [actors, setActors] = useState(null);

    useEffect(() => {
        fetchCast(movieId).then(response => {
            console.log(response.cast);
            if (response.cast.length) {
                setActors(response.cast);
            }
        })
    }, [movieId]);

    return (  
        <>      
        { actors 
        ? 
            <ListWrap> 
                { actors.map((actor) => (                
                    <ListItem key={actor.id}>
                        <Poster src={ actor.profile_path ? `https://image.tmdb.org/t/p/original${actor.profile_path}` : placeholder } alt="" />
                        <Descr>
                            <p>{actor.original_name}</p>
                            <p>Character: {actor.character}</p>  
                        </Descr>
                    </ListItem> 
                ))}
            </ListWrap>
        :
        <p>There are no actors</p>
        }
        </>
    )
}