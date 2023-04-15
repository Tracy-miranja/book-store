import React from 'react';
import { Link } from 'react-router-dom';
// eslint-disable-next-line import/no-extraneous-dependencies
import { MdPerson } from 'react-icons/md';

function Nav() {
  return (
    <div className="nav-container">

      <ul>
        <div><h1>BOOKSTORE CMS</h1></div>
        <li>
          <Link to="/form">BOOKS</Link>
        </li>
        <li>
          <Link to="/Categories" className="CATEGORIES Text-Style-9">CATEGORIES</Link>
        </li>
      </ul>
      <div className="Oval">
        <div className="Mask">

          <MdPerson className="profile" />

        </div>
      </div>
    </div>
  );
}

export default Nav;
