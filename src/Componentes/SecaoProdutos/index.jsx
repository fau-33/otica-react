import styles from "./SecaoProdutos.module.css";
export default function SecaoProdutos() {
  return (
    <section id="produtos" className={styles.secaoProdutos}>
      <div className={styles.limitarSecao}>
        <h3 className={styles.titulo}>Nossos produtos</h3>
        <p className={styles.descricao}>
          Trabalhamos com óculos de grau, óculos de sol, lentes transition nos
          modelos masculino, feminino e infantil.
        </p>
        <p className={styles.descricao}>
          Todos os nossos preços são acessíveis e contam com a melhor qualidade
          do mercado.
        </p>
        <div className={styles.containerProdutos}>
          <div className={styles.boxProduto}>
            <h4>Óculos de grau</h4>
            <img
              src="/oculos01.png"
              title="Óculos de grau"
              alt="4 óculos de grau de cores diferentes"
            />
            <p>R$ 500,00</p>
          </div>
          <div className={styles.boxProduto}>
            <h4>Óculos transition</h4>
            <img
              src="/oculos02.png"
              title="Óculos de grau"
              alt="4 óculos de grau de cores diferentes"
            />
            <p>R$ 750,00</p>
          </div>
          <div className={styles.boxProduto}>
            <h4>Óculos de sol</h4>
            <img
              src="/oculos03.png"
              title="Óculos de grau"
              alt="4 óculos de grau de cores diferentes"
            />
            <p>R$ 700,00</p>
          </div>
          <div className={styles.boxProduto}>
            <h4>Óculos infantil</h4>
            <img
              src="/oculos04.png"
              title="Óculos de grau"
              alt="4 óculos de grau de cores diferentes"
            />
            <p>R$ 500,00</p>
          </div>
        </div>
        <p className={styles.listaTitulo}>Todos os nossos produtos incluem:</p>

        <ul>
          <li>Garantia de 1 ano</li>
          <li>Manutenção preventiva</li>
          <li>Descontos especiais na compra da segunda unidade</li>
          <li>Flexibilidade de pagamento</li>
        </ul>
      </div>
    </section>
  );
}
