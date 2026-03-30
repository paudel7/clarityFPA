import type { Metadata } from "next";
import './globals.css';
import './legacy.css';

export const metadata: Metadata = {
  title: "Consulting FPA",
  description: "Financial Planning and Analysis Consulting",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
