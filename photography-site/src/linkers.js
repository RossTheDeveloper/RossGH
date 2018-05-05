import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = (props) => {
  return (
    <div className="header">
      <ul className="ok">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
      </ul>
      <h3 className="text-muted">testing our router</h3>
    </div>
  );
}

export default Navigation;
