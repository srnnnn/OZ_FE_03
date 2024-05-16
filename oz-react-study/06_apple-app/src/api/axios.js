import axios from 'axios';

const instance = axios.create({
    baseURL : "https://api.themoviedb.org/3",
    params: {
        api_key :'9b65915a39791b608837ccaa4f719e7a' ,
        language: "ko-KR"
    }
});

export default instance;