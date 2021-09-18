import axios from "axios";

export const moviesApi = {
    getMoviesList(page = 1) {
        return axios.get(`https://yts.mx/api/v2/list_movies.json?page=${page}`)
    },
    getMovieData(id) {
        return axios.get(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    }

}