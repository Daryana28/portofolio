import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Daryana | Portfolio",
  description:
    "Developer portfolio for international clients, focused on websites, dashboards, and responsive custom systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
