import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk'
import { moviesReducer } from "./reducers/movies";
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({
    moviesReducer: moviesReducer
});
export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));