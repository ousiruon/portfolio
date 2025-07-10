import type { Metadata } from "next";
import "./globals.css";
import Providers from "./Providers";
import { keywords } from "@/utils/keywords";

export const metadata: Metadata = {
  title: "O.Dehmani Portfolio",
  description: "A Frontend Developer Portfolio",
  keywords: keywords,
  authors: [
    {
      name: "O.Dehmani",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body className={`antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
