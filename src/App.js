import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Rocket from './components/rocket';
import Dragons from './components/Dragons';
import MyProfile from './components/MyProfile';
import Missions from './components/Missions';
import './styles/css/App.css';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Rocket />} />
        <Route className="Missions" path="/missions" element={<Missions />} />
        <Route className="Dragons" path="/Dragons" element={<Dragons />} />
        <Route path="/MyProfile" element={<MyProfile />} />
      </Routes>
    </>
  );
}

export default App;
