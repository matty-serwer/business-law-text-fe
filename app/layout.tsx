import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/sonner"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import Container from "@/components/layout/Container"
import type { Metadata } from "next";
import "./globals.css";


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
      <body className="bg-background text-foreground min-h-screen flex flex-col">
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
