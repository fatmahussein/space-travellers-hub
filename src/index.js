import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import './styles/css/index.css';
import App from './App';
import { DataStore } from './Redux/dataStore';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={DataStore}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
