import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Movie from '../Movie/Movie';
import classes from './MovieList.module.css'
function MovieList() {
    const dispatch = useDispatch()
    const movies = useSelector(state => state.moviesReducer.movies);

    return (
        <div className={classes.movies}>
        {movies.map((movie,i) => {
            return (
            <Movie key={movie.id} rating={movie.rating} cover={movie.large_cover_image}
             year={movie.year} title={movie.title} genres={movie.genres}
             description={movie.summary} id={movie.id} />
            )
        })}        
        </div>
    )
}
export default MovieList
