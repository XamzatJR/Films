import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import classes from './MoviePage.module.css';
import Loader from '../Loader/Loader';
import CommentSection from '../CommentSection/CommentSection';
function MoviePage(props) {
    const {currentMovie, isFetching} = useSelector(state => state.moviesReducer);
    
    return (
        <>  
        {isFetching ? <Loader/> 
        : <>
            <Header>
                <div>
                <Link to="/">
                <button className={classes.btn} >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.68981 13.7414L2.28356 8.69751L6.68981 3.65366C7.04588 3.24562 7.00434 2.62598 6.5963 2.26959C6.18825 1.91352 5.56894 1.95538 5.21222 2.3631L0.242297 8.05237C-0.0807656 8.42184 -0.0807656 8.97346 0.242297 9.34293L5.21227 15.0322C5.40647 15.2539 5.6782 15.3677 5.95153 15.3677C6.18042 15.3677 6.41025 15.2879 6.5963 15.1254C7.00439 14.769 7.0462 14.1494 6.68981 13.7414Z" fill="white"/>
                    <path d="M16.8717 7.71658H0.980906C0.439125 7.71658 0 8.15566 0 8.69749C0 9.23927 0.439125 9.6784 0.980906 9.6784H16.8717C19.7206 9.6784 22.0382 11.9959 22.0382 14.8445C22.0382 17.6931 19.7206 20.0107 16.8717 20.0107H2.28881C1.74703 20.0107 1.30791 20.4498 1.30791 20.9916C1.30791 21.5334 1.74703 21.9725 2.28881 21.9725H16.8717C20.8019 21.9725 24 18.7747 24 14.8445C24 10.9143 20.8022 7.71658 16.8717 7.71658Z" fill="white"/>
                    </svg>
                </button>
                </Link>
                </div>
            </Header>
            <div className={classes.container}>
                <div className={classes.cover}>
                    <img className={classes.poster} src={currentMovie.large_cover_image} alt="Cover" />
                    <div className={classes.rating}>
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M31.9167 12.2751C31.7072 11.6271 31.1325 11.1669 30.4525 11.1056L21.2164 10.267L17.5642 1.71869C17.2949 1.0922 16.6816 0.686676 16.0002 0.686676C15.3188 0.686676 14.7055 1.0922 14.4362 1.72015L10.784 10.267L1.54648 11.1056C0.867755 11.1684 0.294498 11.6271 0.0837994 12.2751C-0.126899 12.9231 0.0676857 13.6338 0.581127 14.0818L7.56251 20.2045L5.50386 29.2729C5.35322 29.9396 5.61202 30.6289 6.16525 31.0288C6.46263 31.2436 6.81053 31.353 7.16137 31.353C7.46387 31.353 7.76393 31.2715 8.03322 31.1103L16.0002 26.3487L23.9643 31.1103C24.5471 31.4609 25.2817 31.4289 25.8337 31.0288C26.3872 30.6276 26.6458 29.9382 26.4951 29.2729L24.4365 20.2045L31.4179 14.083C31.9313 13.6338 32.1273 12.9243 31.9167 12.2751Z" fill="#299DED"/>
                        </svg>
                        <span>{currentMovie.rating}</span>
                    </div>
                </div>
                <div className={classes.movieInfo}>
                    <h1 className={classes.title}>{currentMovie.title}</h1>
                    <div className={classes.year}>{currentMovie.year}</div>
                    <div className={classes.genres}>
                        {currentMovie.genres.map(genre => {
                            return (
                                <div key={genre} className={classes.genre}>
                                    <div className={classes.circle}></div>
                                    <div className={classes.genreTitle}>{genre}</div>
                                </div>
                            )
                        })}
                    </div>
                    
                    <h2 className={classes.synopsis}>Synopsis</h2>
                    <p className={classes.p}>{currentMovie.synopsis}</p>
                    <div className={classes.comments}>Comments</div>
                    <CommentSection />
                </div>
                
            </div>
            
            </>
        }
        </>
    )
}

export default MoviePage
