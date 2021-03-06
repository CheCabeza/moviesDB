import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import store from './redux/store';
import Header from './components/header/Header';
import MoviesList from './components/moviesList/MoviesList';
import tvList from './components/tvList/tvList';
import './App.css';

function App() {
  return (
    <>
      <div className="App">
        <Provider store={store({})}>
          <BrowserRouter>
            <Header />
            <Switch>
              <Route path="/" exact component={MoviesList} />
              <Route path="/tvshows" exact component={tvList} />
            </Switch>
          </BrowserRouter>
        </Provider>
      </div>
    </>
  );
}

export default App;
