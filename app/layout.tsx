import type { Metadata } from "next";
import "./globals.css";
import { Lexend_Deca } from "next/font/google";
import StoreProvider from "./StoreProvider";

const lexendDeca = Lexend_Deca({
  variable: "--font-lexend-deca",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Netflix-GPT",
  description: "App that has list of movies with GPT integrated",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${lexendDeca.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  );
}
