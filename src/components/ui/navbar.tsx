"use client"
import Image from "next/image";
import Link from "next/link";
import { Button } from "./button";
import { useTheme } from "next-themes";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
    const { theme, setTheme } = useTheme();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <>
            {/* Header with navigation - Inspired by Graphy.app */}
            <header className="fixed top-0 left-0 right-0 z-50 bg-white/70 dark:bg-neutral-950/70 backdrop-blur-lg border-b border-neutral-200/50 dark:border-neutral-800/50 transition-colors duration-300">
                <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                    <div className="flex items-center">
                        <Link href="/" className="flex items-center gap-2">
                            <Image
                                src="/kalpi-logo.jpeg"
                                alt="Kalpi Capital Logo"
                                width={120}
                                height={40}
                                className="h-8 w-auto"
                            />
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-6">
                        <Link href="#features" className="text-sm font-medium hover:text-[#4CAF50] transition-colors">
                            Features
                        </Link>
                        <Link
                            href="#how-it-works"
                            className="text-sm font-medium hover:text-[#4CAF50] transition-colors"
                        >
                            How It Works
                        </Link>
                        <Link href="#" className="text-sm font-medium hover:text-[#4CAF50] transition-colors">
                            Pricing
                        </Link>
                        <Link href="#" className="text-sm font-medium hover:text-[#4CAF50] transition-colors">
                            About
                        </Link>
                        <div className="flex items-center gap-4">
                            <Button variant="outline" size="sm" className="border-neutral-200 dark:border-neutral-800">
                                Login
                            </Button>
                            <Button
                                size="sm"
                                className="bg-gradient-to-r from-[#4CAF50] to-[#8BC34A] hover:from-[#3d8b40] hover:to-[#7CB342] text-white"
                            >
                                Get Started
                            </Button>
                            <button
                                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                                className="p-2 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
                                aria-label="Toggle theme"
                            >
                                {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
                            </button>
                        </div>
                    </nav>

                    {/* Mobile Menu Button */}
                    <div className="flex items-center gap-4 md:hidden">
                        <button
                            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                            className="p-2 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300"
                            aria-label="Toggle theme"
                        >
                            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
                        </button>
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="p-2"
                            aria-label="Toggle menu"
                        >
                            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {mobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="md:hidden bg-white/90 dark:bg-neutral-950/90 backdrop-blur-md border-b border-neutral-200/50 dark:border-neutral-800/50"
                        >
                            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
                                <Link
                                    href="#features"
                                    className="py-2 text-sm font-medium hover:text-[#4CAF50]"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    Features
                                </Link>
                                <Link
                                    href="#how-it-works"
                                    className="py-2 text-sm font-medium hover:text-[#4CAF50]"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    How It Works
                                </Link>
                                <Link
                                    href="#"
                                    className="py-2 text-sm font-medium hover:text-[#4CAF50]"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    Pricing
                                </Link>
                                <Link
                                    href="#"
                                    className="py-2 text-sm font-medium hover:text-[#4CAF50]"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    About
                                </Link>
                                <div className="flex flex-col gap-2 pt-2">
                                    <Button variant="outline" size="sm" className="justify-center">
                                        Login
                                    </Button>
                                    <Button
                                        size="sm"
                                        className="bg-gradient-to-r from-[#4CAF50] to-[#8BC34A] hover:from-[#3d8b40] hover:to-[#7CB342] text-white justify-center"
                                    >
                                        Get Started
                                    </Button>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </header>
        </>
    );
}
