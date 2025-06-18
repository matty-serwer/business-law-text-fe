import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/sonner"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import Container from "@/components/layout/Container"
import type { Metadata } from "next";
import { Rethink_Sans, Libre_Baskerville } from "next/font/google";
import "./globals.css";

const rethinksans = Rethink_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-rethinksans',
});

const baskerville = Libre_Baskerville({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-baskervville',
});

export const metadata: Metadata = {
  title: "Business Law Textbook",
  description: "A modern business law resource.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${rethinksans.variable} ${baskerville.variable} bg-background text-foreground min-h-screen flex flex-col`}>
        {/* ThemeProvider enables dark/light mode and system preference */}
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Header />
          <Container>
            {children}
          </Container>
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
