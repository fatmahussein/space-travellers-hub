import React from 'react';
import { NavLink } from 'react-router-dom';
import planetImg from '../Assets/images/planet.png';
import '../App.css';

const NavBar = () => {
  const result = (
    <div className="navBar">
      <NavLink className="bookstoreTitle" to="/">
        Bookstore CMS
      </NavLink>
      <NavLink className="link" to="/">
        Books
      </NavLink>
      <NavLink className="link" to="/">
        Categories
      </NavLink>
      <NavLink className="link" to="/">
        Contact
      </NavLink>
      <NavLink className="accountPic" to="/">
        <img src={planetImg} alt="" />
      </NavLink>
    </div>
  );

  return result;
};

export default NavBar;
