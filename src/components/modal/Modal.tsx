import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RiCloseCircleFill } from 'react-icons/ri';
import { loadDetails, loadSimilar } from '../../redux/actions/actionCreator';
import { AppState } from '../../redux/reducers';
import './Modal.scss';

interface IModalProps {
  open: boolean;
  onClose: any;
  movieId: string;
  type: string;
}
interface IProduction {
  id: string;
  title?: string;
  name?: string;
  vote_average: string;
  poster_path: string;

}

export default function MovieModal({
  open, onClose, movieId, type,
}: IModalProps) {
  const details = useSelector((store: AppState) => store.details);
  const similarMovies = useSelector((store: AppState) => store.similar.results);
  const dispatch = useDispatch();
  const [movieID, setMovieID] = useState(movieId);

  useEffect(() => {
    dispatch(loadDetails(movieID, type));
    dispatch(loadSimilar(movieID, type));
  }, [movieID]);

  useEffect(() => {
    dispatch(loadDetails(movieId, type));
    dispatch(loadSimilar(movieId, type));
  }, [movieId]);

  if (!open) return null;

  return (
    <>
      <div className="Overlay" />
      <div className="MovieModal">
        <button type="button" onClick={onClose} className="MovieModal__close-button" aria-label="log out"><RiCloseCircleFill /></button>
        <div className="MovieModal__movie-details-section">
          <img src={`https://image.tmdb.org/t/p/w500${details.backdrop_path}`} alt={details.title} />
          <div className="movie-details-section__movie-details-info">
            {
              details.title ? (<h1>{details.title}</h1>) : <h1>{details.name}</h1>
            }

            <p>{details.overview}</p>
          </div>
        </div>

        <big>Similar Movies:</big>
        <div className="MovieModal__SimilarMovies">
          {
            similarMovies && similarMovies.slice(0, 6).map((element:IProduction) => (
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
