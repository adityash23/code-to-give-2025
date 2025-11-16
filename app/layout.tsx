import "./styles/global.css";
import React from "react";

export const metadata = {
  title: "My App",
  description: "My Next.js App",
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-black font-sans">{children}</body>
    </html>
  );
}