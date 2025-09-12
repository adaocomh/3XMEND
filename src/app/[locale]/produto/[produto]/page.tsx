import PaginaProduto from "../../../components/conteudoPageProduto";

export default function PageProduto({
  params,
}: {
  params: { produto: string };
}) {
  return <PaginaProduto title={params.produto} />;
}
