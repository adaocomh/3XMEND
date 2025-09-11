import ClientPage from "../../components/conteudoPageCategoria";

export default async function PageDinamicasCategorias({
  params,
}: {
  params: { categoria: string };
}) {
  return <ClientPage categoria={params.categoria} />;
}