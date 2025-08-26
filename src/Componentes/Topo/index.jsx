import estilos from "./Topo.module.css";

export default function Topo() {
  return (
    <header className={estilos.container}>
      <div className={estilos.limitar_secao}>
        <img
          className={estilos.logo}
          src="./logo.png"
          alt="imagem de um óculos à direita e o nome da ótica à esquerda"
        />
        <nav>
          <a className={estilos.link} href="#produtos">
            PRODUTOS
          </a>
          <a className={estilos.link} href="#sobre">
            SOBRE
          </a>
          <a className={estilos.link} href="#contato">
            CONTATO
          </a>
        </nav>
      </div>
    </header>
  );
}
