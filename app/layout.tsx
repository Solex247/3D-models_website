import Image from "next/image";
import "./globals.css";
import { Albert_Sans, Montserrat_Alternates } from "next/font/google";
import Printforge from "@/public/printforge-logo.svg";
import PrintforgeLogoIcon from "@/public/printforge-logo-icon.svg";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";

const albertSans = Albert_Sans({
  subsets: ["latin"],
  display: "swap",
});

const montserratAlternates = Montserrat_Alternates({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat-alternates",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${albertSans.className} ${montserratAlternates.variable}`}
      >
        <Navbar />

        {children}
      </body>
    </html>
  );
}
