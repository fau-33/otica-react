import estilos from "./SecaoCapa.module.css";

export default function SecaoCapa() {
  return (
    <section className={estilos.secao_capa}>
      <div className={estilos.limitar_secao}>
        <p>Preços baixos em</p>
        <h1>
          Óculos de
          <br />
          grau e de sol
        </h1>
        <p>Você só encontra aqui</p>
      </div>
    </section>
  );
}
