<<<<<<< HEAD
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Missions from './components/Missions';
=======
import { Routes, Route } from 'react-router-dom';
>>>>>>> e29bb8f098a83b670903bc9a6936c7f5e59a5338
import './App.css';
import NavBar from './components/NavBar';
import Rocket from './components/rocket';
import MyProfile from './components/MyProfile';

function App() {
  return (
    <>
      <NavBar />
<<<<<<< HEAD
      <Routes className="Routes">
        <Route className="Missions" path="/missions" element={<Missions />}>
          {' '}
          Missions
        </Route>
        <Route className="Missions" path="/*" element={<Missions />}>
          {' '}
          Missions
        </Route>
      </Routes>
    </div>
=======
      <Routes>
        <Route path="/" element={<Rocket />} />
        <Route path="/MyProfile" element={<MyProfile />} />
      </Routes>
    </>
>>>>>>> e29bb8f098a83b670903bc9a6936c7f5e59a5338
  );
}

export default App;
