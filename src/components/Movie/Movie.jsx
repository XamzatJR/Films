import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { setCurrentMovie } from '../../store/actionCreators/movies';
import classes from './Movie.module.css';
function Movie({ rating, id, cover, title, genres, year, movie }) {
  function setMovie(movie) {
    dispatch(setCurrentMovie(movie));
    localStorage.setItem('currentMovie', JSON.stringify(movie));
  }
  const dispatch = useDispatch();
  return (
    <div className={classes.movieBlock}>
      <Link to={`/movie/${id}`}>
        <div className={classes.movie} onClick={() => setMovie(movie)}>
          <div>
            <img src={cover} alt="" width={`100%`} height={`100%`} />
          </div>
          <div className={classes.hoverInfo}>
            <div>
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M31.9167 12.2751C31.7072 11.6271 31.1325 11.1669 30.4525 11.1056L21.2164 10.267L17.5642 1.71869C17.2949 1.0922 16.6816 0.686676 16.0002 0.686676C15.3188 0.686676 14.7055 1.0922 14.4362 1.72015L10.784 10.267L1.54648 11.1056C0.867755 11.1684 0.294498 11.6271 0.0837994 12.2751C-0.126899 12.9231 0.0676857 13.6338 0.581127 14.0818L7.56251 20.2045L5.50386 29.2729C5.35322 29.9396 5.61202 30.6289 6.16525 31.0288C6.46263 31.2436 6.81053 31.353 7.16137 31.353C7.46387 31.353 7.76393 31.2715 8.03322 31.1103L16.0002 26.3487L23.9643 31.1103C24.5471 31.4609 25.2817 31.4289 25.8337 31.0288C26.3872 30.6276 26.6458 29.9382 26.4951 29.2729L24.4365 20.2045L31.4179 14.083C31.9313 13.6338 32.1273 12.9243 31.9167 12.2751Z"
                  fill="#299DED"
                />
              </svg>
              <div className={classes.rating}>{rating}</div>
            </div>
            <div className={classes.genres}>
              {genres
                ? genres.map((genre) => {
                    return (
                      <div key={genre} className={classes.genre}>
                        {genre}
                      </div>
                    );
                  })
                : null}
            </div>
            <button className={classes.btn}>More</button>
          </div>
        </div>
      </Link>
      <div className={classes.title}>{title}</div>
      <div className={classes.year}>{year}</div>
    </div>
  );
}
export default Movie;
