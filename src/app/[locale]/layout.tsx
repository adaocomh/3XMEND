import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Loader from "../components/telaDeCarregamentoIni";
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
  title: "3XMEND | Agência de Marketing Digital",
  description: "Cuidamos do seu negócio, desde o posicionamento ao clique que gera vendas. Agência Completa de Marketing Digital.",
  keywords: ["marketing digital", "gestão de tráfego", "branding", "social media", "agência 3XMEND", "cripto", "cripto moeda", "audio visual", "TI"],
  openGraph: {
    title: "3XMEND | Agência de Marketing Digital",
    description: "Do posicionamento ao clique que gera vendas. Agência completa para o seu negócio.",
    url: "https://www.3xmend.com",
    siteName: "3XMEND",
    images: [
      {
        url: "https://www.3xmend.com/sala-3xmend-angulo-1.webp",
        width: 1200,
        height: 630,
        alt: "3XMEND - Agência de Marketing Digital",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "3XMEND | Agência de Marketing Digital",
    description: "Cuidamos do seu negócio, desde o posicionamento ao clique que gera vendas.",
    images: ["https://www.3xmend.com/sala-3xmend-angulo-1.webp"],
  },
  icons: {
    icon: "/iconsLogo/icon3MEND.webp",
    apple: "/iconsLogo/icon-apple3XMEND.webp",
  }
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
