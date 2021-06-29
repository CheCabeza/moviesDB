import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import loadMovies from '../../redux/actions/actionCreator';
import './moviesList.scss';

function MoviesList({ dispatch, moviesList } : any) {
  useEffect(() => {
    dispatch(loadMovies());
  }, [dispatch]);

  return (
    <div className="movie_container">
      {
      moviesList.results.map((element:any) => (
        <div className="movieBox">
          <img src={`https://image.tmdb.org/t/p/w500${element.poster_path}`} alt={element.title} />
          <div className="movieBox__info">
            <p>{element.title}</p>
            <p>{element.vote_average}</p>
          </div>
        </div>
      ))
    }
    </div>

  // <h1>{JSON.stringify(moviesList.results)}</h1>
  );
}

function mapStateToProps(store: any) {
  return {
    moviesList: store.moviesList,
  };
}

export default connect(mapStateToProps)(MoviesList);
