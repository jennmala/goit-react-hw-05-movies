import { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import { fetchCast } from 'services/ApiService';

export const Cast = () => {
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
            <ul> 
                { actors.map((actor) => (                
                    <li key={actor.id}>
                        { actor.profile_path && <img src={`https://image.tmdb.org/t/p/original${actor.profile_path}`} width="20" alt="" /> }
                        <p>{actor.original_name}</p>
                        <p>Character: {actor.character}</p>        
                    </li> 
                ))}
            </ul>
        :
        <p>There are no actors</p>
        }
        </>
    )
}