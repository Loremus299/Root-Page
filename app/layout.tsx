import type { Metadata } from "next";
import { Geist, Playfair_Display, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { TooltipProvider } from "@/components/ui/tooltip";

const fontSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fontSerif = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
});

const fontMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

const embed = "/embed.png";

export const metadata: Metadata = {
  metadataBase: "https://loremus.gay",
  title: "Loremus",
  description: "My little space on the internet",
  openGraph: {
    images: [
      {
        url: embed,
        secureUrl: embed,
      },
    ],
  },
  twitter: {
    images: [
      {
        url: embed,
        secureUrl: embed,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fontSans.variable} ${fontSerif.variable} ${fontMono.variable} antialiased`}
        style={{ cursor: "url('/cursor.png') 16 16, auto" }}
      >
        <TooltipProvider>{children}</TooltipProvider>
      </body>
    </html>
  );
}
