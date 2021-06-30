import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RiCloseCircleFill } from 'react-icons/ri';
import { loadMovieDetails, loadSimilarMovies } from '../../redux/actions/actionCreator';
import './Modal.scss';

export default function MovieModal({
  open, onClose, movieId, type,
}: any) {
  const movieDetails = useSelector((store: any) => store.movieDetails);
  const similarMovies = useSelector((store: any) => store.similarMoviesList.results);
  const dispatch = useDispatch();
  const [movieID, setMovieID] = useState(movieId);

  useEffect(() => {
    dispatch(loadMovieDetails(movieID, type));
    dispatch(loadSimilarMovies(movieID, type));
  }, [movieID]);

  useEffect(() => {
    dispatch(loadMovieDetails(movieId, type));
    dispatch(loadSimilarMovies(movieId, type));
  }, [movieId]);

  if (!open) return null;

  return (
    <>
      <div className="Overlay" />
      <div className="MovieModal">
        <button type="button" onClick={onClose} className="MovieModal__close-button" aria-label="log out"><RiCloseCircleFill /></button>
        <div className="MovieModal__movie-details-section">
          <img src={`https://image.tmdb.org/t/p/w500${movieDetails.backdrop_path}`} alt={movieDetails.title} />
          <div className="movie-details-section__movie-details-info">
            {
              movieDetails.title ? (<h1>{movieDetails.title}</h1>) : <h1>{movieDetails.name}</h1>
            }

            <p>{movieDetails.overview}</p>
          </div>
        </div>

        <p>Similar Movies:</p>
        <div className="MovieModal__SimilarMovies">
          {
            similarMovies && similarMovies.slice(0, 6).map((element:any) => (
              <div className="similarMoviesBox">
                <button type="button" onClick={() => { setMovieID(element.id); }}>
                  <img src={`https://image.tmdb.org/t/p/w500${element.poster_path}`} alt={element.title} />
                </button>
              </div>
            ))

          }
        </div>
      </div>
    </>
  );
}
