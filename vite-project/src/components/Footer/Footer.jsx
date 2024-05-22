import styles from "../Footer/Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <p>&copy; 2024 Minha Empresa. Todos os direitos reservados.</p>
      {/* <nav className={styles.footernav}>
        <ul className={styles.footernavList}>
          <li className={styles.footernavItem}>
            <a href="#home">Home</a>
          </li>
          <li className={styles.footernavItem}>
            <a href="#about">Sobre</a>
          </li>
          <li className={styles.footernavItem}>
            <a href="#services">Serviços</a>
          </li>
          <li className={styles.footernavItem}>
            <a href="#contact">Contato</a>
          </li>
        </ul>
      </nav> */}
    </footer>
  );
}
