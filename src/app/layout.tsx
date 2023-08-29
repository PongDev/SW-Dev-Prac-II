import MenuBar from "@/components/MenuBar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vaccine Booking",
  description: "Vaccine Booking Application",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MenuBar />
        <div className="pt-14">{children}</div>
      </body>
    </html>
  );
}
