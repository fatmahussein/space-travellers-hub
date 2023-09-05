import React from 'react';
import { NavLink } from 'react-router-dom';
import planetImg from '../Assets/images/planet.png';
import '../App.css';

const NavBar = () => {
  const result = (
    <header className="navbar">
      <div className="logoInfo">
        <img src={planetImg} alt="" />
        <h1>Space Traveller&apos;s Hub</h1>
      </div>
      <div className="links">
        <NavLink to="/">
          Rockets
        </NavLink>
        <NavLink to="/missions">
          Missions
        </NavLink>
        <NavLink to="/dragons">
          Dragons
        </NavLink>
        <NavLink to="/Myprofile">
          My Profile
        </NavLink>
      </div>
    </header>
  );

  return result;
};

export default NavBar;
