import Axios from 'axios';

export const fetchPhotos = (keyword, page) => {
    const a_key = "Q2gzTTI5IjGat6mllsManZ7rKP8Hd7Kc3NrER1xgR-w";
    let url = `https://api.unsplash.com/search/photos?client_id=${a_key}&query=${keyword}&per_page=12&page=${page}`;
    return Axios.get(url);
}