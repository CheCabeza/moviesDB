import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadTv } from '../../redux/actions/actionCreator';
import { AppState } from '../../redux/reducers';
import MoviesModal from '../moviesModal/Modal';
import Stars from '../stars/Stars';
import './tvList.scss';

interface ItvShow {
  id: null;
  name: string;
  vote_average: string;
  poster_path: string;

}

function tvList() {
  const [isOpen, setIsOpen] = useState(false);
  const [tvShowID, settvShowId] = useState(null);
  const tvShows = useSelector((store: AppState) => store.tvShowsList.results);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadTv());
  }, []);

  return (
    <>
      <div className="tv_container">
        {
      tvShows && tvShows.map((element:ItvShow) => (
        <div className="tvBox">
          <button type="button" onClick={() => { setIsOpen(true); settvShowId(element.id); }}>

            <img src={`https://image.tmdb.org/t/p/w500${element.poster_path}`} alt={element.name} />
            <div className="tvBox__info">
              <p>{element.name}</p>
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

      <MoviesModal open={isOpen} onClose={() => setIsOpen(false)} movieId={tvShowID} type="tv" />
    </>

  );
}

export default tvList;
