import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Container from './components/Container/Container';
import { getMovieListThunk } from './store/actionCreators/movies';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMovieListThunk());
  }, []);
  return (
    <>
      <Container />
    </>
  );
}

export default App;
