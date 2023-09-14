import "./globals.css";
import NextThemeProvider from "./provider/themeProvider";

import { Judson } from "next/font/google";
import Header from "./components/header";
import Footer from "./components/footer";

const judson = Judson({ weight: ["400", "700"], subsets: ["latin"] });

export const metadata = {
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
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={judson.className}>
        <NextThemeProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </NextThemeProvider>
      </body>
    </html>
  );
}
