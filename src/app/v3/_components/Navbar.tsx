import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu, Moon, Sun, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";

export default function Navbar() {
    const { theme, setTheme } = useTheme();

    const [isOpen, setIsOpen] = useState(false);
    const navLinks = [
        {
            name: "Strategy Builder",
            href: "/",
        },
        {
            name: "My Strategies",
            href: "/strategies",
        },
        {
            name: "Backtest",
            href: "/backtest",
        },
        {
            name: "Market Place",
            href: "/marketplace",
        },
    ];

    const toggleMenu = () => setIsOpen(!isOpen);

    // Animation variants for the mobile menu
    const menuVariants = {
        closed: {
            opacity: 0,
            height: 0,
            transition: {
                duration: 0.3,
                when: "afterChildren",
                staggerChildren: 0.05,
                staggerDirection: -1,
            },
        },
        open: {
            opacity: 1,
            height: "auto",
            transition: {
                duration: 0.3,
                when: "beforeChildren",
                staggerChildren: 0.1,
                delayChildren: 0.1,
            },
        },
    };

    // Animation variants for menu items
    const itemVariants = {
        closed: {
            x: -18,
            opacity: 0,
            transition: {
                duration: 0.2,
            },
        },
        open: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 0.3,
                ease: "easeOut",
            },
        },
    };

    // Animation variants for rainbow bars
    const rainbowVariants = {
        closed: {
            scaleX: 0,
            transition: {
                duration: 0.2,
            },
        },
        open: {
            scaleX: 1,
            transition: {
                duration: 0.4,
                ease: "easeOut",
            },
        },
    };

    return (
        <div className="fixed top-0 right-0 left-0 p-4 z-50">
            <nav className="rounded-full outline-2 outline-primary/5 flex justify-between items-center px-2 py-2 bg-muted/50 backdrop-blur shadow-lg relative z-50">
                <div>
                    <Link href="/" className="bg-white h-10 w-16 relative flex items-center justify-center  rounded-4xl overflow-hidden">
                        <Image
                            src="/kalpi-logo.jpeg"
                            alt="Kalpi Logo"
                            width={100}
                            height={100}
                            className=" w-auto object-contain absolute bottom-0.5"
                        />
                    </Link>
                </div>

                {/* Desktop Navigation Links */}
                <div className="hidden lg:flex mx-auto gap-8">
                    {navLinks.map((link) => (
                        <AnimatedLink key={link.name} href={link.href}>
                            {link.name}
                        </AnimatedLink>
                    ))}
                </div>

                {/* Action Buttons and Mobile Menu Toggle */}
                <div className="flex items-center gap-3">
                    <div className="hidden sm:flex gap-2">
                        <Button variant="outline" size="sm">
                            Sign Up
                        </Button>
                        <Button size="sm">Demo</Button>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                        className="text-muted-foreground hover:text-foreground"
                    >
                        {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
                    </button>
                    <Button
                        variant="ghost"
                        size="sm"
                        className="lg:hidden p-2"
                        onClick={toggleMenu}
                        aria-label="Toggle menu"
                    >
                        <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
                            {isOpen ? <X size={20} /> : <Menu size={20} />}
                        </motion.div>
                    </Button>
                </div>
            </nav>

            {/* Mobile Menu Dropdown */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="lg:hidden rounded-b-4xl absolute top-12 pt-8 left-4 right-4 bg-background shadow-lg  outline-2 outline-primary/5 z-40"
                        initial="closed"
                        animate="open"
                        exit="closed"
                        variants={menuVariants}
                    >
                        <div className="p-4 space-y-4 flex flex-col">
                            {/* Mobile Navigation Links */}
                            {navLinks.map((link, idx) => (
                                <motion.div key={idx} variants={itemVariants} onClick={() => setIsOpen(false)}>
                                    <AnimatedLink href={link.href}>{link.name}</AnimatedLink>
                                </motion.div>
                            ))}

                            {/* Mobile Action Buttons */}
                            <motion.div variants={itemVariants} className="flex flex-col gap-2 pt-4 border-t sm:hidden">
                                <Button variant="outline" size="sm" className="w-full">
                                    Sign Up
                                </Button>
                                <Button size="sm" className="w-full">
                                    Demo
                                </Button>
                            </motion.div>
                        </div>

                        {/* Rainbow Bar for Mobile */}
                        <div className="flex h-0.5 px-6 z-50">
                            {["bg-red-400", "bg-orange-400", "bg-yellow-400", "bg-green-400", "bg-blue-400"].map(
                                (color, index) => (
                                    <motion.div
                                        key={index}
                                        className={cn(color, "h-0.5 flex-1 opacity-60 rounded-full ")}
                                        variants={rainbowVariants}
                                        style={{ originX: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                    />
                                )
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Desktop Rainbow Bar */}
            <div className="rounded-full flex h-0.5 px-8 relative bottom-0.5 z-50">
                {["bg-red-400", "bg-orange-400", "bg-yellow-400", "bg-green-400", "bg-blue-400"].map((color, index) => (
                    <div key={index} className={cn(color, "h-0.5 flex-1 opacity-60 rounded-full ")} />
                ))}
            </div>
        </div>
    );
}

// Enhanced AnimatedLink component
function AnimatedLink({ href, children }: { href: string; children: React.ReactNode }) {
    return (
        <Link href={href} className="block group relative overflow-hidden h-6 text-sm font-medium text-no-wrap">
            <span className="w-full h-6 inline-flex items-center transition-transform duration-300 group-hover:-translate-y-full">
                {children}
            </span>
            <span className="w-full h-6 absolute left-0 inline-flex items-center transition-transform duration-300 translate-y-full group-hover:translate-y-0">
                {children}
            </span>
        </Link>
    );
}
