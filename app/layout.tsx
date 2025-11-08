import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
  maximumScale: 5.0,
  userScalable: true,
  viewportFit: "cover",
  themeColor: "#0EA5E9",
};

export const metadata: Metadata = {
  title: "Plim - Serviços de Limpeza",
  description: "Conecte-se com profissionais qualificados de limpeza. Rápido, seguro e confiável.",
  keywords: ["limpeza", "faxina", "diarista", "profissional de limpeza", "plim"],
  manifest: "/manifest.json",
  openGraph: {
    title: "Plim - Serviços de Limpeza",
    description: "Conecte-se com profissionais qualificados de limpeza",
    type: "website",
    locale: "pt_BR",
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Plim",
    startupImage: [
      {
        url: "/icon-512.png",
        media: "(device-width: 430px) and (device-height: 932px) and (-webkit-device-pixel-ratio: 3)",
      },
    ],
  },
  applicationName: "Plim",
  formatDetection: {
    telephone: true,
    address: true,
    email: true,
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