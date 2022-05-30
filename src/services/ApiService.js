const KEY = '96dcfe2237b7906f247a8426cca4c612';

export function fetchTrending() {
    return fetch(
            `https://api.themoviedb.org/3/trending/all/day?api_key=${KEY}`    
        ).then(result => {
            if (result.ok) {
            return result.json();
            }
            return Promise.reject(new Error('Something was wrong'));
        }
    );
}

export function fetchMovieById(movieId) {
    return fetch(
            `https://api.themoviedb.org/3/movie/${movieId}?api_key=${KEY}`    
        ).then(result => {
            if (result.ok) {
            return result.json();
            }
            return Promise.reject(new Error('Something was wrong'));
        }
    );
}

export function fetchMoviesByKeyword(keyword) {
    return fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${KEY}&language=en-US&page=1`
    )
}

