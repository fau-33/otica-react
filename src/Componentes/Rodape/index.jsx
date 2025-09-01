import styles from "./Rodape.module.css";

export default function Rodape() {
  return (
    <footer className={styles.rodape}>
      <div className={styles.rodape_container}>
        <p className={styles.copyright}>
          © 2025 - Todos os direitos reservados
        </p>
        <p className={styles.desenvolvedor}>Desenvolvido por Flávio Félix</p>
      </div>
    </footer>
  );
}
