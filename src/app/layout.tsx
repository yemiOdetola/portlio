import type { Metadata } from "next";
import {
  Montserrat,
  Fira_Mono,
  Poppins,
  Inter,
  Averia_Sans_Libre,
} from "next/font/google";
import { MobileNav, Cursor, Header, Footer } from "@/components/ui";
import "./globals.css";

const montserrat = Montserrat({
  weight: ["300", "400", "500", "700", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  adjustFontFallback: false,
});

const inter = Inter({
  weight: ["300", "400", "500", "700", "900"],
  subsets: ["latin"],
  adjustFontFallback: false,
});

export const metadata: Metadata = {
  title: "Odetola Azeez | Frontend Engineer",
  description:
    "Frontend enginner | React | Next.js | React native| Vue.js | Angular | Redux| Python | Flask ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="author" content="Odetola Azeez" />
        <title>Odetola Azeez | Frontend enginner</title>
        <meta
          name="description"
          content="Odetola is a frontend + Mobile engineer. He has 5 years experience building web/mobile solutions."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://oodetola.vercel.app" />
        <meta property="og:title" content="Odetola Azeez | Frontend Engineer" />
        <meta
          property="og:description"
          content="Odetola Azeez is a frontend + Mobile engineer. He has 5 years experience building web/mobile solutions"
        />
        <meta
          name="keywords"
          content="Frontend enginner, React Developer, Next.js,  React native, Vue.js, Node.js, Angular,
          Redux, Python,  Flask"
        />
        <meta property="og:url" content="https://oodetola.vercel.app" />
        <meta property="og:image" content="/images/oodetola-bg.svg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@yemiotola" />
        <meta
          name="twitter:title"
          content="Odetola Azeez | Frontend Engineer"
        />
        <meta
          name="twitter:description"
          content="Odetola Azeez is a frontend + Mobile engineer. He has 5 years experience building web/mobile solutions"
        />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="twitter:image" content="images/oodetola.svg" />
        <meta name="twitter:site" content="@yemiOtola" />
        <meta name="robots" content="index, follow" />
        <link rel="icon" href="/images/favicon.svg" />
      </head>

      <body
        className={`${inter.className} text-sm leading-6 transition ease text-gray-700`}
      >
        <Cursor />
        <Header />
        {children}
        <MobileNav />
      </body>
    </html>
  );
}
