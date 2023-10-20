import React from 'react';
import './Navbar.css'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="menu">
      <ul className="list">
        <li className="items">
        <Link to="/home">HOME</Link>
          <Link to="/html">HTML</Link>
          <Link to="/css">CSS</Link>
          <Link to="/javascript">JAVASCRIPT</Link>

        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
