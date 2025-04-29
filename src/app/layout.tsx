import type { Metadata } from "next";
import { League_Spartan } from "next/font/google";

import "./globals.css";

const leagueSpartan = League_Spartan({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Arch Studio App",
  description: "Arch Studio app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${leagueSpartan.className} mx-auto max-w-7xl bg-white px-6 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
