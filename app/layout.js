import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientLayout from "./(home)/_components/ClientLayout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Edgine - LMS in Nextjs",
   icons: {
    icon: "/logo1.png",
  },
  description: "LMS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {/* ✅ Client-only wrapper */}
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
