import PropTypes from 'prop-types';
import styles from "../Header/Header.module.css";
import logo from '../Header/img/logo.jpg';

export function Header({ setActiveSection }) {
  return (
    <header className={styles.header}>
      <div className={styles.headerlogo}>
        <img src={logo} alt="Logo" />
      </div>
      <nav className={styles.headernav}>
        <ul className={styles.headernavList}>
          <li className={styles.headernavItem}>
            <a href="#home" onClick={() => setActiveSection('home')}>Home</a>
          </li>
          <li className={styles.headernavItem}>
            <a href="#about" onClick={() => setActiveSection('about')}>Sobre</a>
          </li>
          <li className={styles.headernavItem}>
            <a href="#services" onClick={() => setActiveSection('services')}>Serviços</a>
          </li>
          <li className={styles.headernavItem}>
            <a href="#contact" onClick={() => setActiveSection('contact')}>Contato</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

Header.propTypes = {
  setActiveSection: PropTypes.func.isRequired,
};
