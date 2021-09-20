const SET_IS_FETCHING = "SET_IS_FETCHING",
        SET_PAGE = "SET_PAGE",
        SET_CURRENT_MOVIE = "SET_CURRENT_MOVIE",
        SET_MOVIES_LIST = "SET_MOVIES_LIST";
const initialValue = {
    isFetching: false,
    page: 1,
    movies: [],
    currentMovie: null || JSON.parse(localStorage.getItem('currentMovie')),
};

export const moviesReducer = (state = initialValue, action) => {
    switch (action.type) {
        case SET_IS_FETCHING:
        return {...state, isFetching: action.payload}

        case SET_PAGE:
        return {...state, page: action.payload}

        case SET_CURRENT_MOVIE:
            return {...state, currentMovie: action.payload}
        
        case SET_MOVIES_LIST:
        return {...state, movies: action.payload}

        default:
        return state
    }
}