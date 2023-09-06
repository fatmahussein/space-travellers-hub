import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MissionsContainer from './Redux/Missions/MissionsContainer';

import './styles/css/App.css';
import NavBar from './components/NavBar';
import Rocket from './components/rocket';
import MyProfile from './components/MyProfile';

function App() {

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Rocket />} />
        <Route className="Missions" path="/missions" element={<MissionsContainer />} />
        <Route path="/MyProfile" element={<MyProfile />} />
      </Routes>
    </>
  );
}

export default App;
