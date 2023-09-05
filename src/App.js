import { Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Rocket from './components/rocket';
import MyProfile from './components/MyProfile';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Rocket />} />
        <Route path="/MyProfile" element={<MyProfile />} />
      </Routes>
    </>
  );
}

export default App;
