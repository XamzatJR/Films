import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Container from './components/Container/Container'
import Header from './components/Header/Header'
import MoviePage from './components/MoviePage/MoviePage'
import { getMovieListThunk } from './store/actionCreators/movies'


function App() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getMovieListThunk())
    }, [])
    return (
        <>
            <Container/>
        </>
    )
}

export default App
