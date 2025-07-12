import type { Metadata } from "next";
import { Space_Grotesk } from 'next/font/google'
import "./globals.css";

const space_grotesk = Space_Grotesk({
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: "Game Token | Raise Your Games",
  description: "Game Token | Raise Your Games",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased bg-[#111111] ${space_grotesk.className} h-screen w-screen overflow-hidden`}
      >
        <div className="flex flex-col overflow-y-auto overflow-x-hidden h-full w-full">
          {children}
        </div>
      </body>
    </html>
  );
}
