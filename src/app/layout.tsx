import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Green Yield Consulting",
  description:
    "Aligning capital, projects, and people to accelerate investable solutions in energy and sustainability.",
  keywords: ["sustainability", "energy", "consulting", "green", "yield", "ESG"],
  icons: {
    icon: "/team/favicon.png",
  },
  openGraph: {
    title: "Green Yield Consulting",
    description: "Smart Connections, Real Yield, Lasting Progress",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
