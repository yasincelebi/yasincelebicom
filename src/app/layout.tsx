import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {clsx} from "clsx";
import Head from 'next/head'


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Yasin Çelebi - Frontend Developer",
  description: "Yasin Çelebi's portfolio website showcasing his experience as a frontend developer.",
  applicationName: "Yasin Çelebi",
  authors: {
    name: "Yasin Çelebi",
    url: "https://yasincelebi.com",
  },
  category: "Portfolio",
    keywords: ["Yasin Çelebi", "Frontend Developer", "React", "Next.js","TypeScript"],
  robots: "index, follow",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
          <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-WNZFZWRC');</script>
      
      </Head>
      <body className={clsx(" text-black dark:text-white bg-white dark:bg-black", inter.className)}>

<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WNZFZWRC"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>

      {children}
      </body>
    </html>
  );
}
