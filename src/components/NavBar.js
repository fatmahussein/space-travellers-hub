import React from 'react';
import { NavLink } from 'react-router-dom';
import planetImg from '../Assets/images/planet.png';
import '../styles/css/NavBar.css';

const NavBar = () => {
  const result = (
    <div className="navBar">
      <NavLink className="navImg" to="/">
        <img src={planetImg} alt="" />
      </NavLink>
      <div className="navbuttons">
        <NavLink className="link" to="/">
          Rockets
        </NavLink>
        <NavLink className="link" to="/missions">
          Missions
        </NavLink>
        <NavLink className="link" to="/">
          Dragons
        </NavLink>

        <span className="Vspan">|</span>

        <NavLink className="link" to="/">
          My Profile
        </NavLink>
      </div>
    </div>
  );

  return result;
};

export default NavBar;
