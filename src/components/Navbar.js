import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <div>
      <h1>BOOKSTORE CMS</h1>
      <ul>
        <li>
          <Link to="/form">BOOKS</Link>
        </li>
        <li>
          <Link to="/Categories">CATEGORIES</Link>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
