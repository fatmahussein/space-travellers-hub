import React from 'react';
import { NavLink } from 'react-router-dom';
import planetImg from '../Assets/images/planet.png';
import '../styles/css/NavBar.css';

const NavBar = () => {
  const handleActive = (nav) => (nav.isActive ? '' : 'active-link');
  const result = (
    <header className="navbar">
      <div className="logoInfo">
        <img src={planetImg} alt="" />
        <h1 className='navHeader'>Space Traveller&apos;s Hub</h1>
      </div>
      <div className="links">
        <NavLink className={(nav) => handleActive(nav)} to="/">Rockets</NavLink>
        <NavLink className={(nav) => handleActive(nav)} to="/missions">Missions</NavLink>
        <NavLink className={(nav) => handleActive(nav)} to="/dragons">Dragons</NavLink>
        <NavLink id="border" className={(nav) => handleActive(nav)} to="/Myprofile">My Profile</NavLink>
      </div>
    </header>
  );

  return result;
};

export default NavBar;
