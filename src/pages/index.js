import Rodape from "@/Componentes/Rodape";
import SecaoCapa from "@/Componentes/SecaoCapa";
import SecaoContato from "@/Componentes/SecaoContato";
import SecaoProdutos from "@/Componentes/SecaoProdutos";
import SecaoSobre from "@/Componentes/SecaoSobre";
import Topo from "@/Componentes/Topo";

export default function Home() {
  return (
    <div>
      <Topo />
      <SecaoCapa />
      <SecaoProdutos />
      <SecaoSobre />
      <SecaoContato />
      <Rodape />
    </div>
  );
}
