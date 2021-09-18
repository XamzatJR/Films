import React from 'react'
import { useSelector } from 'react-redux'
import Header from '../Header/Header'
import Loader from '../Loader/Loader'
import MovieList from '../MovieList/MovieList'
import Pagination from '../Pagination/Pagination'
import classes from './Container.module.css'
function Container() {
  const isFetching = useSelector((state) => state.moviesReducer.isFetching)
    return (
      <>
        <Header>
          <Pagination/>    
        </Header> 
        <div className={classes.container}>
          {isFetching 
          ? <Loader/>
          : <MovieList/>}
        </div>
      </>
    )
}

export default Container
