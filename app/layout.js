import "./globals.css";
import { DM_Serif_Display, Public_Sans } from "next/font/google";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

const serif = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-serif",
});
const sans = Public_Sans({ subsets: ["latin"], variable: "--font-sans" });

export const metadata = {
  title: "PayApi",
  description: "Build your API's for absolutely free",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body className="relative overflow-x-hidden">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
