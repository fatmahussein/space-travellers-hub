import React from 'react';
import { Link } from 'react-router-dom';
import planetImg from '../images/planet.png';
import '../App.css';

const NavBar = () => {
  const result = (
    <div className="navBar">
        <Link className="bookstoreTitle" to="/">
          Bookstore CMS
        </Link>
        <Link className="link" to="/">
          Books
        </Link>
        <Link className="link" to="/">
          Categories
        </Link>
        <Link className="link" to="/">
          Contact
        </Link>

      <Link className="accountPic" to="/">
        <img src={planetImg} alt="" />
      </Link>
    </div>
  );

  return result;
};

export default NavBar;
