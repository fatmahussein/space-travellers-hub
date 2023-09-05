import React from 'react';
<<<<<<< HEAD
// import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import './styles/css/index.css';
=======
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
// import ReactDOM from 'react-dom/client';
import './index.css';
>>>>>>> e29bb8f098a83b670903bc9a6936c7f5e59a5338
import App from './App';
import { DataStore } from './Redux/dataStore';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
<<<<<<< HEAD
      <Provider store={DataStore}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
=======
      <App />
    </BrowserRouter>
  </React.StrictMode>,
>>>>>>> e29bb8f098a83b670903bc9a6936c7f5e59a5338
);
