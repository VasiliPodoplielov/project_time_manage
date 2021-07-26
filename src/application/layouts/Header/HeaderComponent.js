import React from 'react';
import { Link } from 'react-router-dom';

const HeaderComponent = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">
      <Link to="/" className="navbar-brand">Home</Link>
    </div>
  </nav>
);

export default HeaderComponent;
