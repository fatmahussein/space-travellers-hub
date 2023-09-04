import { Link } from 'react-router-dom';
import planetImg from '../images/planet.png';
import '../App.css';

const NavBar = () => {
  const result = (
    <div>
      <nav className="navBar">
        <div className="fstdiv">
          <Link className="bookstoreTitle" to="/BookStoreReact_Vite/">
            Bookstore CMS
          </Link>
          <Link className="link" to="/BookStoreReact_Vite/books">
            Books
          </Link>
          <Link className="link" to="/BookStoreReact_Vite/categories">
            Categories
          </Link>
          <Link className="link" to="/BookStoreReact_Vite/contact">
            Contact
          </Link>
        </div>
        <Link className="accountPic" to="/BookStoreReact_Vite/">
          <img src={planetImg} alt="" />
        </Link>
      </nav>
    </div>
  );

  return result;
};

export default NavBar;
