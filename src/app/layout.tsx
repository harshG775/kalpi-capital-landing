import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import Navbar from "@/components/ui/navbar";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Kalpi Capital - Democratizing Quant Systematic Investing",
    description:
        "Create, backtest and deploy Quant AI/ML portfolios without writing code. Harness the power of data-driven decisions.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
                <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
                    <div className="flex flex-col min-h-screen relative bg-gradient-to-b from-white to-neutral-50 dark:from-neutral-950 dark:to-black transition-colors duration-300">
                        <Navbar />
                        {children}
                        </div>
                </ThemeProvider>
            </body>
        </html>
    );
}
