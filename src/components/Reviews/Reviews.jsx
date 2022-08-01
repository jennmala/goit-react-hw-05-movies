import { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import { fetchReview } from 'services/ApiService';
import { ListWrap, ListItem, Author } from './Reviews.styled';

export default function Reviews() {
    const [movieId] = useOutletContext();
    const [reviews, setReviews] = useState(null);

    useEffect(() => {
        fetchReview(movieId).then(response => {
            console.log(response.results);
            if (response.results.length) {
                setReviews(response.results);
            }
        })
    }, [movieId]);

    return (
        <>
        { reviews 
        ?
            <ListWrap>
                { reviews.map((review) => (
                    <ListItem key={review.id}>
                        <Author>Author: <span>{review.author}</span></Author>
                        <p>{review.content}</p>
                    </ListItem>
                ))

                }
            </ListWrap>
        :
        <p>There are no reviews</p>
        }
        </>
    )
}