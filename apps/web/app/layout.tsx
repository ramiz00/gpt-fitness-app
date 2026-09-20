import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Stride — Your routine, in motion",
  description: "A calmer way to build better movement and nutrition habits."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
