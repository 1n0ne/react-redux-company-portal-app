import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1>Company Application</h1>
      <nav>
        <ul>
          <li><Link to="/companies">Show All Companies</Link></li>
          <li><Link to="/company">Show Company By ID</Link></li>
          <li><Link to="/search">Search Company By name</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;