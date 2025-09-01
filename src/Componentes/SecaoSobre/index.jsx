import styles from "./SecaoSobre.module.css";

export default function SecaoSobre() {
  return (
    <section id="sobre" className={styles.secaoSobre}>
      <div className={`limitar-secao ${styles.containerSobre}`}>
        <h3>QUEM SOMOS NÓS?</h3>
        <p>
          Fundada em 2001, em Nova Iguaçu - Rio de Janeiro, a Óticas vida
          iniciou suas atividades focada no atendimento ao público de renda mais
          baixa, sempre com o objetivo de proporcionar ao cliente bom
          atendimento, qualidade e preço baixo.{" "}
        </p>

        <div className={styles.boxCards}>
          <img src="/loja.png" alt="Loja" />

          <div className={styles.card}>
            <h4>Nossas Filiais</h4>
            <p>Hoje temos mais de 20 filiais pelo Brasil e na América</p>
          </div>

          <div className={styles.card}>
            <h4>Atendimento flexível</h4>
            <p>Nossa equipe possui é treinada para te atender</p>
          </div>

          <img src="/atendimento.png" alt="Atendimento" />
        </div>
      </div>
    </section>
  );
}
