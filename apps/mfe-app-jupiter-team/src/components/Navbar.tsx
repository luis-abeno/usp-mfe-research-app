import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar: React.FC = () => {
  return (
    <nav className={styles['navbar']}>
      <ul className={`${styles['navbar-list']} container mx-auto`}>
        <li className={styles['navbar-item']}>
          <Link to="/" className={styles['navbar-link']}>
            Home
          </Link>
        </li>
        <li className={styles['navbar-item']}>
          <Link to="/about" className={styles['navbar-link']}>
            Sobre
          </Link>
        </li>
        <li className={styles['navbar-item']}>
          <Link to="/material" className={styles['navbar-link']}>
            Materiais
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
