import { moviesApi } from "../../API";

const setPage = (page) => {
    return {
    type: "SET_PAGE",
    payload: page,
    }
};
const setIsFetching = (isFetch) => {
    return {
        type: "SET_IS_FETCHING",
        payload: isFetch,
    }
};
const setMovieList = (movies) => {
    return {
        type: "SET_MOVIES_LIST",
        payload: movies,
    }
};
const setCurrentMovie = (movie) => {
    return {
        type: "SET_CURRENT_MOVIE",
        payload: movie,
    }
};

export const getMovieListThunk = (page) => {
    return (dispatch) => {
        dispatch(setIsFetching(true));

        moviesApi.getMoviesList(page)
        .then((res) => {
            dispatch(setMovieList(res.data.data.movies))
            dispatch(setPage(res.data.data.page_number))
        })
        .catch((error) => console.log(error))
        .finally(() => {
            dispatch(setIsFetching(false))
        });
    }
};
export const getMovieDataThunk = (id) => {
    return (dispatch) => {
        dispatch(setIsFetching(true))
        moviesApi.getMovieData(id)
        .then((res) => {
            dispatch(setCurrentMovie(res.data.data.movie_id))
        })
        .catch((error) => console.log(error))
        .finally(() => {
            dispatch(setIsFetching(false))
        });
    }
}