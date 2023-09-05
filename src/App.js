import { Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Rocket from './components/Rocket';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Rocket />} />
      </Routes>
    </>
  );
}

export default App;
