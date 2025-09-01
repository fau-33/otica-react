import SecaoCapa from "@/Componentes/SecaoCapa";
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
    </div>
  );
}
