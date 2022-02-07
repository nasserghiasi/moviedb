import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.scss';

function Header() {
  return (
    <header className={styles.header}>
      <h1>
        <Link to="/">The MovieDB</Link>
      </h1>

      <nav>
        <ul>
          <li>
            <Link to="/favorites">Favorites</Link>
          </li>
          <li>
            <Link to="/watch-list">Watch List</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
