import ClientPage from "../../../components/conteudoPageProduto";

export default function PageDinamicasProduto({
  params,
}: {
  params: { produto: string };
}) {
  return <ClientPage title={params.produto} />;
}
