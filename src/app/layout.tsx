import type { Metadata } from "next";
import "./globals.css";
import { dmSans, roboto } from "@/config/fonts";

export const metadata: Metadata = {
  title: "Activa",
  description: "Mejora tu vida",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${roboto.variable} ${dmSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
