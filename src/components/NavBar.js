import React from 'react';
import { NavLink } from 'react-router-dom';
import planetImg from '../Assets/images/planet.png';
import '../App.css';

const NavBar = () => {
  const result = (
    <div className="navBar">
      <NavLink className="Logo" to="/">
        LogoTitle
      </NavLink>
      <NavLink className="link" to="/">
        Rockets
      </NavLink>
      <NavLink className="link" to="/">
        Missions
      </NavLink>
      <NavLink className="link" to="/">
        Dragons
      </NavLink>
      <NavLink className="navImg" to="/">
        <img src={planetImg} alt="" />
      </NavLink>
    </div>
  );

  return result;
};

export default NavBar;
