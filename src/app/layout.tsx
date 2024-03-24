import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {clsx} from "clsx";


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
      <body className={clsx(" text-black dark:text-white bg-white dark:bg-black", inter.className)}>
      {children}
      </body>
    </html>
  );
}
