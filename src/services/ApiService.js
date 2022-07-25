const BASE_URL = 'https://api.themoviedb.org/3';
const KEY = '96dcfe2237b7906f247a8426cca4c612';

export const fetchTrending = () => {
    return fetch(
            `${BASE_URL}/trending/all/day?api_key=${KEY}`    
        ).then(result => {
            if (result.ok) {
            return result.json();
            }
            return Promise.reject(new Error('Something was wrong'));
        }
    );
}

export const fetchMovieById = movieId => {
    return fetch(
            `${BASE_URL}/movie/${movieId}?api_key=${KEY}`    
        ).then(result => {
            if (result.ok) {
            return result.json();
            }
            return Promise.reject(new Error('Something was wrong'));
        }
    );
}

export const fetchMoviesByKeyword = keyword => {
    return fetch(
            `${BASE_URL}/search/movie?query=${keyword}&api_key=${KEY}&language=en-US&page=1`
        ).then(result => {
            if (result.ok) {
            return result.json();
            }
            return Promise.reject(new Error('Something was wrong'));
        }
    );
}

export const fetchCast = movieId => { 
    return fetch(
            `${BASE_URL}/movie/${movieId}/credits?api_key=${KEY}`    
        ).then(result => {
            if (result.ok) {
            return result.json();
            }
            return Promise.reject(new Error('Something was wrong'));
        }
    );
}

export const fetchReview = movieId => { 
    return fetch(
            `${BASE_URL}/movie/${movieId}/reviews?api_key=${KEY}`    
        ).then(result => {
            if (result.ok) {
            return result.json();
            }
            return Promise.reject(new Error('Something was wrong'));
        }
    );
}