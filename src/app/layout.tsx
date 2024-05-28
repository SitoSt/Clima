import type { Metadata } from "next";
import { Onest } from "next/font/google";
import "./globals.css";
import { NextUIProvider } from "@nextui-org/react";
import { ViewportLayout } from "next/dist/lib/metadata/types/extra-types";


const onest = Onest({
  subsets: ['latin'],
  weight: 'variable',
  preload: true
})

const viewport: ViewportLayout = {
  width: "device-width",
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 1,
}

export const metadata: Metadata = {
  title: "Clima",
  description: "Web par ver el Pronostico del tiempo",
  viewport: viewport,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={onest.className}>

      <body className="bg-neutral-950">
        <div className="fixed left-0 top-0 -z-1 h-full w-full">
          <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
        </div>
        <NextUIProvider>
          {children}
        </NextUIProvider>
      </body>


    </html>
  );
}
