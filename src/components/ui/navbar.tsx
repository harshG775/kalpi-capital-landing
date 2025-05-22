"use client";
import Link from "next/link";
import { Button } from "./button";
import { useTheme } from "next-themes";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MagneticButton } from "./magnetic-button";

export default function Navbar() {
    const { theme, setTheme } = useTheme();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <>
            {/* Header */}
            <header className="fixed top-0 left-0 right-0 z-50 mix-blend-difference">
                <div className="container mx-auto px-4 h-24 flex items-center justify-between">
                    <Link href="/" className="text-primary-foreground text-2xl font-bold">
                        KALPI
                    </Link>

                    <div className="hidden md:flex items-center gap-8">
                        <Link
                            href="#features"
                            className="text-muted-foreground hover:text-foreground transition-colors"
                        >
                            Features
                        </Link>
                        <Link href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
                            About
                        </Link>
                        <Link href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">
                            Pricing
                        </Link>

                        <MagneticButton className="bg-foreground text-background rounded-full px-6 py-2 font-medium hover:bg-foreground/90 transition-colors">
                            Get Started
                        </MagneticButton>

                        <button
                            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                            className="text-muted-foreground hover:text-foreground"
                        >
                            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
                        </button>
                    </div>

                    <button className="md:hidden text-foreground" onClick={() => setMobileMenuOpen(true)}>
                        <Menu size={24} />
                    </button>
                </div>
            </header>

            {/* Mobile menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: "100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: "100%" }}
                        transition={{ type: "spring", damping: 30, stiffness: 300 }}
                        className="fixed inset-0 bg-background z-50 p-4 flex flex-col"
                    >
                        <div className="flex justify-between items-center mb-12">
                            <Link href="/" className="text-foreground text-2xl font-bold">
                                KALPI
                            </Link>
                            <button className="text-foreground" onClick={() => setMobileMenuOpen(false)}>
                                <X size={24} />
                            </button>
                        </div>

                        <div className="flex flex-col gap-8 text-2xl">
                            <Link
                                href="#features"
                                className="text-muted-foreground hover:text-foreground transition-colors"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Features
                            </Link>
                            <Link
                                href="#about"
                                className="text-muted-foreground hover:text-foreground transition-colors"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                About
                            </Link>
                            <Link
                                href="#pricing"
                                className="text-muted-foreground hover:text-foreground transition-colors"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Pricing
                            </Link>
                        </div>

                        <div className="mt-auto flex flex-col gap-4">
                            <Button className="bg-foreground text-background rounded-full hover:bg-foreground/90 transition-colors">
                                Get Started
                            </Button>

                            <button
                                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                                className="text-muted-foreground hover:text-foreground self-center"
                            >
                                {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
