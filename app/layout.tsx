import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Thad Blankenship | Software Engineer",
  description:
    "Product-focused software engineer based in Dallas, TX. Experienced in TypeScript, React, React Native, AI, UI/UX, and Open Source.",
  keywords: [
    "Thad Blankenship",
    "Software Engineer",
    "TypeScript",
    "React",
    "React Native",
    "AI",
    "UI/UX",
    "Open Source",
    "Dallas",
  ],
  authors: [
    { name: "Thad Blankenship", url: "https://github.com/tblankenship" },
  ],
  creator: "Thad Blankenship",
  publisher: "Thad Blankenship",
  robots: "index, follow",
  metadataBase: new URL("https://tblankenship.dev"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://tblankenship.dev",
    title: "Thad Blankenship | Software Engineer",
    description:
      "Product-focused software engineer based in Dallas, TX. Experienced in TypeScript, React, React Native, AI, UI/UX, and Open Source.",
    siteName: "Thad Blankenship",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Thad Blankenship - Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Thad Blankenship | Software Engineer",
    description:
      "Product-focused software engineer based in Dallas, TX. Experienced in TypeScript, React, React Native, AI, UI/UX, and Open Source.",
    images: ["/og-image.png"],
    creator: "@thaddblank",
  },
  icons: {
    icon: [{ url: "/favicon.ico" }],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
