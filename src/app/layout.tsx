import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pop Site - Free Personal Site Builder & Linktree Alternative",
  description:
    "Make a stunning site, easily. Used by 8,000+ people & businesses in 50+ countries. Built-in Analytics, SEO, Forms and more.",
  icons: {
    icon: [
      { url: "/seo/K9dDDIVcr8GTjlz3h0uT98mXA.png" },
      { url: "/seo/fV7hsyFOx2vHRCHfwTQOKkvUICk.png", sizes: "32x32" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700,900&display=swap"
        />
      </head>
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
