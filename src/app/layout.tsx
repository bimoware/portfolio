import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import { ReactNode } from "react";
import "./style.css";

const font = Quicksand({
  subsets: ['latin'],
  display: 'swap'
});

export const metadata: Metadata = {
  title: "bimo.dev"
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        {children}
      </body>
    </html>
  );
}
