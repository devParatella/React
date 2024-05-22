import styles from "./Home.module.css";

export function Home() {
  return (
    <section id="home" className={styles.home}>
      <h1>Bem-vindo à nossa página inicial</h1>
      <p>Conheça mais sobre nossos serviços e ofertas.</p>
    </section>
  );
}
