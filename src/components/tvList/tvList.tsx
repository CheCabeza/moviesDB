import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadTv } from '../../redux/actions/actionCreator';
import MoviesModal from '../moviesModal/Modal';
import './tvList.scss';

function tvList() {
  const [isOpen, setIsOpen] = useState(false);
  const [tvShowID, settvShowId] = useState(null);
  const tvShows = useSelector((store: any) => store.tvShowsList.results);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadTv());
  }, []);

  return (
    <>
      <div className="tv_container">
        {
      tvShows && tvShows.map((element:any) => (
        <div className="tvBox">
          <button type="button" onClick={() => { setIsOpen(true); settvShowId(element.id); }}>

            <img src={`https://image.tmdb.org/t/p/w500${element.poster_path}`} alt={element.title} />
            <div className="tvBox__info">
              <p>{element.name}</p>
              <p>{element.vote_average}</p>
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
