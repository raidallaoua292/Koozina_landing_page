import type { Metadata } from "next";
import { Readex_Pro} from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const readexPro = Readex_Pro({ subsets: ["arabic"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html 
      lang="ar"
      dir="rtl"
    >
      <body className={`${readexPro.className}  py-[50px] bg-primary_bg `}>
        <Header/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
