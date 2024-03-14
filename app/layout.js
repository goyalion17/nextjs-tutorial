import { Inter } from "next/font/google";
import "./globals.css";
import NavbarPage from "@/components/Navbar";
import Providers from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Next.js Tutorial",
  description: "Build awesome stuff with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavbarPage />
        <main className="px-8 py-20 max-w-6xl mx-auto">
          <Providers>{children}</Providers>
        </main>
      </body>
    </html>
  );
}
