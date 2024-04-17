import Footer from "@/components/layouts/Footer";
import Header from "@/components/layouts/Header";
import { AuthContextProvider } from "@/context/authContext";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Visual Cortex",
  description: "Image/Object Recognition Tool",
};

export default function RootLayout({ children }) {
  return (
    <AuthContextProvider>
      <html lang="en" className="">
        <body className={inter.className}>
          <Header />
          {children}
          <Footer />
        </body>
      </html>
    </AuthContextProvider>
  );
}
