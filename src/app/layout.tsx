import type { Metadata } from "next";
import {Inter, Lexend } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";

const lexend = Lexend({
    variable: "--font-lexend",
    subsets: ["latin"],
});

const inter = Inter({
    variable: "--font-inter",
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
            <body className={`${lexend.variable} ${inter.variable} font-inter antialiased`}>
                <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
