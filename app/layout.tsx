import { Navbar } from "@/components/navbar";
import type { Metadata } from "next";
import "./globals.css";

const siteUrl: string = "https://eliasmartins.vercel.app";

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Elias Martins",
  jobTitle: "Front-End Developer",
  url: URL,
  sameAs: [
    "https://github.com/EliasMartinzs",
    "https://linkedin.com/in/eliasmartins",
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Elias Martins | Front-End Developer",
    template: "%s | Elias Martins",
  },

  description:
    "Portfolio de Elias Martins, Desenvolvedor Front-End especializado em React, Next.js e TypeScript.",

  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    siteName: "Elias Martins",
    title: "Elias Martins | Front-End Developer",
    description:
      "Portfolio de Elias Martins, Desenvolvedor Front-End especializado em React, Next.js e TypeScript.",
    images: [
      {
        url: "https://eliasmartins.vercel.app/_next/image?url=%2Fprofile-2.jpeg&w=640&q=75",
        width: 1200,
        height: 630,
        alt: "Elias Martins Portfolio",
      },
    ],
  },

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="relative overflow-x-hidden">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personJsonLd),
          }}
        />

        <Navbar />

        <main>{children}</main>
      </body>
    </html>
  );
}
