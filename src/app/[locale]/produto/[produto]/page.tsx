import PaginaProduto from "../../../components/conteudoPageProduto";

export default async function PageProduto({
  params,
}: {
  params: Promise<{ produto: string }>;
}) {
  const { produto } = await params;

  return <PaginaProduto title={produto} />;
}