import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import axios from 'axios'


axios.defaults.baseURL = 'https://menora-test.herokuapp.com/api';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App id="App" />
  </React.StrictMode>
);

