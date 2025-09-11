import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Loader from "../components/telaDeCarregamento";
import TransicaoPage from "../components/transicaoPage";
import CustomCursor from "../components/cursorCustomizado";
import Footer from "../components/footer";
import {NextIntlClientProvider, hasLocale} from 'next-intl';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';
 

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "3XMEND",
  description: "Cuidamos do seu negócio, desde o posicionamento ao clique que gera vendas. Agencia Completa de Marketing Digital.",
};

export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{locale: string}>
}>) {
 
  const {locale} = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  
  return (
    <html lang={locale}>
      <body
        className={`flex flex-col justify-center items-center ${roboto.variable} antialiased`}
         cz-shortcut-listen="true"
      >
        <CustomCursor open/>
        <Loader>
          <TransicaoPage>
          <NextIntlClientProvider>
            {children}
            <Footer/>
          </NextIntlClientProvider>
          </TransicaoPage>
        
        </Loader>
      </body>
    </html>
  );
}
