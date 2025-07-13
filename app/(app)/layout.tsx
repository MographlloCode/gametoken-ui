import type { Metadata } from "next";
import { Space_Grotesk } from 'next/font/google'
import "../globals.css";
import Sidebar from "@/components/application/parts/sidebar/Sidebar";
import Header from "@/components/application/parts/Header";

const space_grotesk = Space_Grotesk({
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: "Game Token | Raise Your Games",
  description: "Game Token | Raise Your Games",
};

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`flex flex-col antialiased bg-[#111111] ${space_grotesk.className} h-screen w-screen overflow-hidden box-border`}
      >
        <Header />
        <main className="flex flex-col p-8 w-full h-full relative">
          <Sidebar />
          {children}
        </main>
      </body>
    </html>
  );
}
