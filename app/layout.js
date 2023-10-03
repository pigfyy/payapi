import "./globals.css";
import { DM_Serif_Display, Public_Sans } from "next/font/google";

import Header from "@/components/Header";

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
  const pathname = children?.props?.childProp?.segment;
  console.log(pathname);
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
