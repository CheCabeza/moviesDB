import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import loadMovies from '../../redux/actions/actionCreator';

function MoviesList({ dispatch, moviesList } : any) {
  useEffect(() => {
    dispatch(loadMovies());
  }, []);

  return (
    moviesList.results.map((element:any) => (

      <h1>{element.title}</h1>

    ))
  );
}

function mapStateToProps(store: any) {
  return {
    moviesList: store.moviesList,
  };
}

export default connect(mapStateToProps)(MoviesList);
