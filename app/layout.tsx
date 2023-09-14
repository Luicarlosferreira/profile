"use client";
import type { Metadata } from "next";

import { usePathname } from "next/navigation";
import "./globals.css";

import { Judson } from "next/font/google";
import Header from "./components/header";
import Footer from "./components/footer";
import { ThemeProvider } from "next-themes";

const judson = Judson({ weight: ["400", "700"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Profile Web Developer",
  description:
    "This is my profile. Here i'm showing what my abilities, and with what i have knowledge. So, enjoy my profile and thank you for beeing here.",
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
    },
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={judson.className}>
        <ThemeProvider attribute="class">
          <Header />
          <main>{children}</main>
          {pathname === "/contact" ? null : <Footer />}
        </ThemeProvider>
      </body>
    </html>
  );
}
