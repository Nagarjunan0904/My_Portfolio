import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import BackgroundLayers from "@/components/ui/BackgroundLayers";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nagarjunan Saravanan | Computer Vision & AI Engineer",
  description:
    "Portfolio of Nagarjunan Saravanan — Computer Vision Engineer, Perception Engineer, and AI/ML specialist. Expertise in PyTorch, TensorFlow, OpenCV, and 3D perception.",
  keywords: [
    "Computer Vision",
    "Perception Engineer",
    "Machine Learning",
    "AI Engineer",
    "PyTorch",
    "TensorFlow",
    "OpenCV",
    "Open3D",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <BackgroundLayers />
        {children}
      </body>
    </html>
  );
}
