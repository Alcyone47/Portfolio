import React, { useState } from 'react';
import styles from './Navbar.module.css';
import menuIcon from '../../assets/nav/menuIcon.png';
import closeIcon from '../../assets/nav/closeIcon.png';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">
        Portfolio
      </a>
      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          src={menuOpen ? closeIcon : menuIcon}
          alt="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul
          className={`${styles.menuItems} ${menuOpen ? styles.menuOpen : ''}`}
          onClick={() => setMenuOpen(false)}
        >
          <li><a href="">Home</a></li>
          <li><a href="">About Me</a></li>
          <li><a href="">Projects</a></li>
          <li><a href="">Contacts</a></li>
          <li><button>Download CV</button></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
