import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadMovieDetails } from '../../redux/actions/actionCreator';
import './MoviesModal.scss';

export default function MovieModal({ open, onClose, movieId }: any) {
  const movieDetails = useSelector((store: any) => store.movieDetails);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadMovieDetails(movieId));
  }, [movieId]);

  if (!open) return null;

  return (
    <>
      <div className="Overlay" />
      <div className="MovieModal">
        <button type="button" onClick={onClose}>X</button>
        <img src={`https://image.tmdb.org/t/p/w500${movieDetails.backdrop_path}`} alt={movieDetails.title} />
        <h1>{movieDetails.title}</h1>
        <p>{movieDetails.overview}</p>
      </div>
    </>
  );
}
