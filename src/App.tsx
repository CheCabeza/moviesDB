import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch } from 'react-router-dom';
import store from './redux/store';
import Header from './components/header/Header';
import './App.css';

function App() {
  return (
    <div className="App">
      <Provider store={store({ type: String })}>
        <BrowserRouter>
          <Header />
          <Switch>
            <h1>hola</h1>
          </Switch>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
