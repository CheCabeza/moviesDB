import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadTv } from '../../redux/actions/actionCreator';
import './tvList.scss';

function tvList() {
  const tvShows = useSelector((store: any) => store.tvShowsList.results);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadTv());
  }, []);

  return (
    <div className="tv_container">
      {
      tvShows && tvShows.map((element:any) => (
        <div className="tvBox">
          <img src={`https://image.tmdb.org/t/p/w500${element.poster_path}`} alt={element.title} />
          <div className="tvBox__info">
            <p>{element.name}</p>
            <p>{element.vote_average}</p>
          </div>
        </div>
      ))
    }
    </div>

  );
}

export default tvList;
