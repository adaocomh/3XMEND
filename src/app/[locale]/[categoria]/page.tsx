import PageCategoria from "@/app/components/conteudoPageCategoria";

export default async function PageDinamicasCategorias({
  params,
}: {
  params: Promise<{ categoria: string }>;
}) {
  const { categoria } = await params;

  return <PageCategoria categoria={categoria} />;
}