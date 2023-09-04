import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Missions from './components/Missions';
import './App.css';
import NavBar from './components/NavBar';

function App() {
  const result = (
    <div className="App">
      <NavBar />
      <Routes className="Routes">
        <Route className="Missions" path="/missions" element={<Missions />}>
          {' '}
          Missions
        </Route>
      </Routes>
    </div>
  );
  return result;
}

export default App;
