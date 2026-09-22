import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Heritage Kiosk | Interactive Cultural Portal & Museum Guide",
  description: "Explore world heritage, architectural marvels, ancient relics, audio guide narrations, and 3D artifact inspections at the interactive museum kiosk.",
  keywords: ["Heritage", "Museum", "Kiosk", "Archaeology", "Audio Guide", "History", "Antiquities"],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#0c0a09",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-stone-950 text-stone-100 antialiased selection:bg-amber-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}
