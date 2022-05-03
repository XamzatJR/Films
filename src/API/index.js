import axios from 'axios';

export const moviesApi = {
  getMoviesList(page = 1) {
    return axios.get(`https://yts.mx/api/v2/list_movies.json?page=${page}`);
  },
};
