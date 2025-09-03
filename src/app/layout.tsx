import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Loader from "./components/telaDeCarregamento";
import CustomCursor from "./components/cursorCustomizado";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "3XMEND",
  description: "Cuidamos do seu negócio, desde o posicionamento ao clique que gera vendas. Agencia Completa de Marketing Digital.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`flex flex-col justify-center items-center ${roboto.variable} antialiased`}
         cz-shortcut-listen="true"
      >
        <CustomCursor open/>
        <Loader>
        {children}
        </Loader>
      </body>
    </html>
  );
}
