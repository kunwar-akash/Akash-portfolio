import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ScrollProgress } from "@/components/scroll-progress";
import { BackToTop } from "@/components/back-to-top";
import { Providers } from "@/components/providers";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Akash Kunwar — Software Development Engineer (SDET)",
    template: "%s | Akash Kunwar",
  },
  description:
    "Software Development Engineer with 2+ years of experience in production support, incident management, and enterprise application validation. Skilled in Linux, SQL, REST APIs, and root cause analysis.",
  keywords: [
    "Akash Kunwar",
    "SDET",
    "Software Development Engineer",
    "QA Engineer",
    "Production Support",
    "Incident Management",
    "REST API Testing",
    "Linux",
    "SQL",
    "Postman",
    "JIRA",
    "Chandigarh",
  ],
  authors: [{ name: "Akash Kunwar", url: "https://linkedin.com/in/akashkunwaronline" }],
  creator: "Akash Kunwar",
  openGraph: {
    type: "website",
    locale: "en_IN",
    title: "Akash Kunwar — Software Development Engineer (SDET)",
    description:
      "Software Development Engineer with 2+ years of experience in production support, incident management, and enterprise application validation.",
    siteName: "Akash Kunwar Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Akash Kunwar — Software Development Engineer (SDET)",
    description:
      "Software Development Engineer with 2+ years of experience in production support and enterprise application validation.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#020817" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <body className="min-h-screen bg-background font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ScrollProgress />
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <BackToTop />
          <Providers />
        </ThemeProvider>
      </body>
    </html>
  );
}
