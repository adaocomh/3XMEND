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
import { getTranslations } from "next-intl/server";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const t = await getTranslations({ locale: params.locale, namespace: "metadata" });

  return {
    title: t("title"),
    description: t("description"),
    keywords: t.raw("keywords").join(", "),
    openGraph: {
      title: t("title"),
      description: t("descriptionOpen"),
      url: "https://www.3xmend.com",
      siteName: "3XMEND",
      images: [
        {
          url: "https://www.3xmend.com/sala-3xmend-angulo-1.webp",
          width: 1200,
          height: 630,
          alt: t("title"),
        },
      ],
      locale: params.locale === "pt" ? "pt_BR" : params.locale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("descriptionTt"),
      images: ["https://www.3xmend.com/sala-3xmend-angulo-1.webp"],
    },
    icons: {
      icon: "/iconsLogo/icon3MEND.webp",
      apple: "/iconsLogo/icon-apple3XMEND.webp",
    },
  };
}

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
