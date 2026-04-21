import { Link } from 'react-router-dom';
import { useState } from 'react'
import styles from './navbar.module.css';

function Navbar() {

  const [isOpen, setOpen] = useState(false);
  
  const [isDropdownOpen , setDropdownOpen] = useState(false);
  const toggleMenu = () => {
    setOpen(!isOpen);

    if (isOpen) setDropdownOpen(false);
  };

  const toggleDropdown = (e) => {
    e.stopPropagation(); // Biar ga bentrok sama klik lain
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className={styles.header}>

    <div className={`${styles.navContainer}`}>
       <div className={styles.logo}>
          bar<span className={styles.logoAksen}>WB</span>.com
      </div>

      

      <nav>
        <ul className={`${styles.menuUtama} ${isOpen ? styles.active : ''}`}>
          <li><Link to="/" onclick={toggleMenu}>home</Link></li>
          <li className={styles.dropdownList}>
            <span onClick={toggleDropdown} className={styles.dropdownToggle}>
              about
              <i className={`fa-solid fa-chevron-down ${styles.chevron} ${isDropdownOpen ? styles.putar : ''}`}></i>
            </span>

            <ul className={`${styles.dropdownMenu} ${isDropdownOpen ? styles.open : ''}`}>
              <li><Link to="/aboutMe" onClick={toggleMenu}>About me</Link></li>
              <li><Link to="/myOffice" onClick={toggleMenu}>my office</Link></li>
            </ul>
          </li>
          <li><Link to="/Service" onClick={toggleMenu}>Service</Link></li>
          <li><Link to="/portopolio" onClick={toggleMenu}>Portofolio</Link></li>
          <li><Link to="/price" onClick={toggleMenu}>Price</Link></li>
          <li><Link to="/contact" onClick={toggleMenu}>contact</Link></li>
        </ul>
    </nav>

    <button className={styles.hamburger} onClick={toggleMenu}
            aria-label="Toggle menu">
              <i className={`${isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars"} ${isOpen ? styles.iconOpen : styles.iconClose}`}></i>
    </button>
  

    <div className="spacer"></div>
    
    </div>
    </header>
  );
}

export default Navbar;