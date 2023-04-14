import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <div className="nav-container">
      <div><h1>BOOKSTORE CMS</h1></div>
      <ul>
        <li>
          <Link to="/form">BOOKS</Link>
        </li>
        <li>
          <Link to="/Categories">CATEGORIES</Link>
        </li>
      </ul>
      <div className="Oval">
        <div className="Mask"><div className="panel-bg" /></div>
      </div>
    </div>
  );
}

export default Nav;
