import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getMovieListThunk } from '../../store/actionCreators/movies';
import classes from './Pagination.module.css';
function Pagination() {
  const dispatch = useDispatch();
  const currentPage = useSelector((state) => state.moviesReducer.page);
  function changePage(page) {
    dispatch(getMovieListThunk(page));
  }
  return (
    <div className={classes.pagination}>
      {currentPage - 1 > 0 && (
        <div className={classes.btn} onClick={() => changePage(currentPage - 1)}>
          {currentPage - 1}
        </div>
      )}
      <div className={`${classes.btn} ${classes.current}`}>{currentPage}</div>
      <div className={classes.btn} onClick={() => changePage(currentPage + 1)}>
        {currentPage + 1}
      </div>
    </div>
  );
}

export default Pagination;
