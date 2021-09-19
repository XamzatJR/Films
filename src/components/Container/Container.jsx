import React from 'react'
import { useSelector } from 'react-redux'
import { Redirect, Route, Switch } from 'react-router'
import Header from '../Header/Header'
import Loader from '../Loader/Loader'
import MovieList from '../MovieList/MovieList'
import MoviePage from '../MoviePage/MoviePage'
import Pagination from '../Pagination/Pagination'
import classes from './Container.module.css'
function Container() {
  const isFetching = useSelector((state) => state.moviesReducer.isFetching)
    return (
      <>
      <Switch>
        <Route exact path="/">
            <Header>
              <Pagination/>    
            </Header> 
            <div className={classes.container}>
              {isFetching 
              ? <Loader/>
              : <MovieList/>}
            </div>
        </Route>
        <Route path="/movie/:id">
          <MoviePage/>
        </Route>
        <Redirect to="/"/>
      </Switch>
        
      </>
    )
}

export default Container
