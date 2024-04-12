import type { Metadata } from "next";
import { Open_Sans, Tilt_Neon } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const font = Open_Sans({subsets:['latin'], weight:['400']})




export const metadata: Metadata = {
  title: "To Do Something",
  description: "At least do something",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(`${font.className} bg-my_color-peach`)}>{children}</body>
    </html>
  );
}
