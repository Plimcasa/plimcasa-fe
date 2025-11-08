import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Plim - Serviços de Limpeza",
  description: "Conecte-se com profissionais qualificados de limpeza. Rápido, seguro e confiável.",
  keywords: ["limpeza", "faxina", "diarista", "profissional de limpeza", "plim"],
  manifest: "/manifest.json",
  themeColor: "#0EA5E9",
  viewport: {
    width: "device-width",
    initialScale: 1.0,
    maximumScale: 5.0,
    userScalable: true,
  },
  openGraph: {
    title: "Plim - Serviços de Limpeza",
    description: "Conecte-se com profissionais qualificados de limpeza",
    type: "website",
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Plim",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
