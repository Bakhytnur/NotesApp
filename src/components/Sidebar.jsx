import React from 'react';
import styles from './Sidebar.module.css';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
        <Link to="/" className={styles.sidebarLinksLink}>Home</Link>
        <Link to="/about" className={styles.sidebarLinksLink}>About</Link>
        <Link to="/add_post" className={styles.sidebarLinksLink}>Add Post</Link>
    </div>
  )
}

export default Sidebar