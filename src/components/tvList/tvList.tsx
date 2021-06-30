import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { loadTv } from '../../redux/actions/actionCreator';
import './tvList.scss';

function tvList({ dispatch, tvShowsList } : any) {
  useEffect(() => {
    dispatch(loadTv());
  }, []);

  return (
    <div className="tv_container">
      {
      tvShowsList.results && tvShowsList.results.map((element:any) => (
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

function mapStateToProps(store: any) {
  return {
    tvShowsList: store.tvShowsList,
  };
}

export default connect(mapStateToProps)(tvList);
