import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadMovies } from '../../redux/actions/actionCreator';
import MoviesModal from '../moviesModal/Modal';
import Stars from '../stars/Stars';
import './moviesList.scss';

function MoviesList() {
  const [isOpen, setIsOpen] = useState(false);
  const [movieID, setMovieId] = useState(null);
  const movies = useSelector((store: any) => store.moviesList.results);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadMovies());
  }, []);

  return (
    <>
      <div className="movie_container">
        {
    movies && movies.map((element:any) => (
      <div className="movieBox">
        <button type="button" onClick={() => { setIsOpen(true); setMovieId(element.id); }}>
          <img src={`https://image.tmdb.org/t/p/w500${element.poster_path}`} alt={element.title} />
          <div className="movieBox__info">
            <p>{element.title}</p>
            <div className="info__stars">
              <Stars votes={parseInt(element.vote_average, 10)} color="red" />
              <p>
                {element.vote_average}
                {' '}
                / 10
              </p>
            </div>
          </div>
        </button>
      </div>
    ))
  }
      </div>

      <MoviesModal open={isOpen} onClose={() => setIsOpen(false)} movieId={movieID} type="movie" />
    </>
  );
}

export default MoviesList;
