import React from 'react';
import { NavLink } from 'react-router-dom';
import planetImg from '../Assets/images/planet.png';
import '../styles/css/NavBar.css';

const NavBar = () => {
  const result = (
<<<<<<< HEAD
    <div className="navBar">
      <NavLink className="navImg" to="/">
        <img src={planetImg} alt="" />
      </NavLink>
      <div className="navbuttons">
        <NavLink className="link" to="/*">
          Rockets
        </NavLink>
        <NavLink className="link" to="/missions">
          Missions
        </NavLink>
        <NavLink className="link" to="/*">
          Dragons
        </NavLink>

        <span className="Vspan">|</span>

        <NavLink className="link" to="/">
          My Profile
        </NavLink>
      </div>
    </div>
=======
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
>>>>>>> e29bb8f098a83b670903bc9a6936c7f5e59a5338
  );

  return result;
};

export default NavBar;
