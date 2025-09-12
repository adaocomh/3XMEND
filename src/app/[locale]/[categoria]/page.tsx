import PageCategoria from "@/app/components/conteudoPageCategoria";

export default async function PageDinamicasCategorias({
  params,
}: {
  params: { categoria: string };
}) {
  return <PageCategoria categoria={params.categoria} />;
}