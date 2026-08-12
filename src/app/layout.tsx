import type { Metadata } from "next";
import { Geist, Geist_Mono, Newsreader } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "AutomateX: AI automation for businesses that can't afford to lose a lead",
  description:
    "AutomateX builds AI chatbots for your website and social media, WhatsApp auto-responders, voice agents, and done-for-you websites for businesses in Kenya and the US. No fluff, no fake results. Just automations that capture and convert leads while you sleep.",
  icons: {
    icon: "/automatex-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${newsreader.variable}`}
    >
      <body className="bg-background text-body antialiased">
        {children}
      </body>
    </html>
  );
}