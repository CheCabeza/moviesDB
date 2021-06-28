import React from 'react';
import { Provider } from 'react-redux';
import Header from './components/header/Header';
import './App.css';

function App() {
  return (
    <div className="App">
      <Provider store={store({ type: String })}>
        <Header />
        <h1>hola</h1>
      </Provider>
    </div>
  );
}

export default App;
