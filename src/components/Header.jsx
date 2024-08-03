import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.title}>
        Blog App
      </div>
      <div className={styles.navbarControls}>
        <input
          type="text"
          placeholder="Search..."
          className={styles.navbarControlsInput}
        />
        <select>
          <option value="">Sort by</option>
          <option value="title">Title</option>
          <option value="id">ID</option>
        </select>
      </div>
    </nav>
  )
}

export default Header