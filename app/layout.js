import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScrolling from "./components/SmoothScrolling"

import Navbar from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Matthias Benoit - Portfolio",
  description: "Développeur web",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <Navbar />
        
        <SmoothScrolling>{children}</SmoothScrolling>
      </body>
    </html>
  );
}
