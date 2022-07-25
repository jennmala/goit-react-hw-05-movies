import { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import { fetchReview } from 'services/ApiService';

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
            <ul>
                { reviews.map((review) => (
                    <li key={review.id}>
                        <p>Author: {review.author}</p>
                        <p>{review.content}</p>
                    </li>
                ))

                }
            </ul>
        :
        <p>There are no reviews</p>
        }
        </>
    )
}