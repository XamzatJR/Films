import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Header.module.css';
function Header({ children }) {
  return (
    <header className={classes.header}>
      <Link to="/" style={{ textDecoration: `none` }}>
        <div className={classes.title}>Movies</div>
      </Link>
      <>{children}</>
    </header>
  );
}

export default Header;
