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
export const setCurrentMovie = (movie) => {
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