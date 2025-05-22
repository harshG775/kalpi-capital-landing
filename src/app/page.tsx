"use client";

import type React from "react";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import {
    ArrowRight,
    Zap,
    BarChart3,
    TrendingUp,
    BrainCircuit,
    Users,
    Shield,
    Sun,
    Moon,
    Menu,
    X,
    ArrowUpRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useMobile } from "@/hooks/use-mobile";
import { CustomCursor } from "@/components/ui/custom-cursor";

// Horizontal scroll section
const HorizontalScrollSection = ({ children }: { children: React.ReactNode }) => {
    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

    return (
        <section ref={targetRef} className="relative h-[300vh]">
            <div className="sticky top-0 h-screen flex items-center overflow-hidden">
                <motion.div style={{ x }} className="flex gap-8 pl-[25vw]">
                    {children}
                </motion.div>
            </div>
        </section>
    );
};

// Feature item for horizontal scroll
const FeatureItem = ({
    icon: Icon,
    title,
    description,
    index,
}: {
    icon: React.ElementType;
    title: string;
    description: string;
    index: number;
}) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="w-[500px] h-[500px] flex-shrink-0 relative group"
        >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-emerald-500/5 rounded-3xl -z-10 group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute inset-0 border border-border rounded-3xl -z-10" />

            <div className="p-10 h-full flex flex-col">
                <div className="mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center">
                        <Icon className="h-8 w-8 text-primary-foreground" />
                    </div>
                </div>

                <h3 className="text-4xl font-bold mb-6 text-foreground">{title}</h3>
                <p className="text-xl text-muted-foreground mb-8">{description}</p>

                <div className="mt-auto">
                    <Button
                        variant="outline"
                        className="rounded-full border-border text-foreground group-hover:bg-background group-hover:text-primary transition-colors duration-300"
                    >
                        Learn more <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                </div>
            </div>
        </motion.div>
    );
};

// Magnetic button effect
const MagneticButton = ({ children, className }: { children: React.ReactNode; className?: string }) => {
    const buttonRef = useRef<HTMLButtonElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const isMobile = useMobile();

    const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (isMobile || !buttonRef.current) return;

        const { clientX, clientY } = e;
        const { left, top, width, height } = buttonRef.current.getBoundingClientRect();

        const x = (clientX - (left + width / 2)) * 0.3;
        const y = (clientY - (top + height / 2)) * 0.3;

        setPosition({ x, y });
    };

    const handleMouseLeave = () => {
        setPosition({ x: 0, y: 0 });
    };

    return (
        <motion.button
            ref={buttonRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            animate={{ x: position.x, y: position.y }}
            transition={{ type: "spring", stiffness: 150, damping: 15 }}
            className={className}
        >
            {children}
        </motion.button>
    );
};

// Animated number counter
const AnimatedCounter = ({ value, duration = 2 }: { value: number; duration?: number }) => {
    const [count, setCount] = useState(0);
    const [isInView, setIsInView] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!isInView) return;

        let startTime: number;
        let animationFrame: number;

        const updateCount = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
            setCount(Math.floor(progress * value));

            if (progress < 1) {
                animationFrame = requestAnimationFrame(updateCount);
            }
        };

        animationFrame = requestAnimationFrame(updateCount);

        return () => cancelAnimationFrame(animationFrame);
    }, [value, duration, isInView]);

    useEffect(() => {
        if (!ref.current) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.5 }
        );

        observer.observe(ref.current);

        return () => observer.disconnect();
    }, []);

    return <div ref={ref}>{count}+</div>;
};

// Parallax section
const ParallaxSection = ({ children, speed = 0.5 }: { children: React.ReactNode; speed?: number }) => {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", `${speed * 100}%`]);

    return (
        <motion.div ref={ref} style={{ y }} className="relative">
            {children}
        </motion.div>
    );
};

// Main component
export default function HomePage() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState(0);
    const sectionsRef = useRef<(HTMLElement | null)[]>([]);
    // Features data
    const handleSectionRef = (index: number) => (el: HTMLElement | null) => {
        sectionsRef.current[index] = el;
    };
    const features = [
        {
            icon: Zap,
            title: "No-Code Strategy Builder",
            description:
                "Build complex quantitative strategies with our intuitive click and drop interface. No coding required.",
        },
        {
            icon: BarChart3,
            title: "Advanced Backtesting",
            description:
                "Test your strategies against historical data with detailed performance metrics and analytics.",
        },
        {
            icon: TrendingUp,
            title: "Portfolio Creation",
            description: "Create equal & custom weighted portfolios with ease with rebalancing options.",
        },
        {
            icon: BrainCircuit,
            title: "Machine Learning & AI Strategy",
            description: "Use AI/ML techniques to build, combine and optimize strategies.",
        },
        {
            icon: Users,
            title: "Strategy Marketplace",
            description:
                "Discover and subscribe to proven strategies from professional Quant researchers in our marketplace.",
        },
        {
            icon: Shield,
            title: "Multi-Factor Model",
            description: "Create a multi-factor portfolios for robust risk adjusted returns.",
        },
    ];

    // Handle theme toggle
    useEffect(() => {
        setMounted(true);
    }, []);

    // Track active section
    useEffect(() => {
        const handleScroll = () => {
            const pageYOffset = window.pageYOffset;
            let newActiveSection = 0;

            sectionsRef.current.forEach((section, index) => {
                if (!section) return;

                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;

                if (pageYOffset >= sectionTop - sectionHeight / 3) {
                    newActiveSection = index;
                }
            });

            setActiveSection(newActiveSection);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    if (!mounted) {
        return null;
    }

    return (
        <>
            <CustomCursor />

            <div className="bg-background text-foreground">
                {/* Fixed navigation dots */}
                <div className="fixed right-8 top-1/2 -translate-y-1/2 z-40 hidden lg:block">
                    <div className="flex flex-col gap-4">
                        {["Intro", "Features", "Stats", "CTA"].map((_, index) => (
                            <button
                                key={index}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                    activeSection === index
                                        ? "bg-primary scale-150"
                                        : "bg-muted hover:bg-muted-foreground"
                                }`}
                                onClick={() => {
                                    if (sectionsRef.current[index]) {
                                        window.scrollTo({
                                            top: sectionsRef.current[index]?.offsetTop,
                                            behavior: "smooth",
                                        });
                                    }
                                }}
                            >
                                {activeSection}
                            </button>
                        ))}
                    </div>
                </div>

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
                            <Link
                                href="#about"
                                className="text-muted-foreground hover:text-foreground transition-colors"
                            >
                                About
                            </Link>
                            <Link
                                href="#pricing"
                                className="text-muted-foreground hover:text-foreground transition-colors"
                            >
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

                <main>
                    {/* Hero section with split design */}
                    <section
                        ref={handleSectionRef(0)}
                        //
                        className="min-h-screen flex flex-col lg:flex-row"
                    >
                        <div className="w-full lg:w-1/2 min-h-screen flex flex-col justify-center p-8 lg:p-16 relative">
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8 }}
                                className="max-w-xl"
                            >
                                <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                                    Democratizing <span className="text-primary">Quant</span> Investing
                                </h1>

                                <p className="text-xl text-muted-foreground mb-12">
                                    Create, backtest and deploy Quant AI/ML portfolios without writing code. Harness the
                                    power of data-driven decisions.
                                </p>

                                <div className="flex flex-col sm:flex-row gap-4">
                                    <MagneticButton className="bg-primary text-primary-foreground rounded-full px-8 py-4 font-medium hover:bg-primary/90 transition-colors">
                                        <span className="flex items-center">
                                            Start Building <ArrowRight className="ml-2 h-5 w-5" />
                                        </span>
                                    </MagneticButton>

                                    <Button
                                        variant="outline"
                                        className="rounded-full border-border text-foreground bg-background hover:bg-accent"
                                    >
                                        Watch Demo
                                    </Button>
                                </div>
                            </motion.div>

                            {/* Animated background elements */}
                            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
                                <motion.div
                                    animate={{
                                        scale: [1, 1.2, 1],
                                        opacity: [0.3, 0.5, 0.3],
                                    }}
                                    transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
                                    className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary/20 filter blur-3xl"
                                />
                                <motion.div
                                    animate={{
                                        scale: [1, 1.5, 1],
                                        opacity: [0.2, 0.4, 0.2],
                                    }}
                                    transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
                                    className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-emerald-500/20 filter blur-3xl"
                                />
                            </div>
                        </div>

                        <div className="w-full lg:w-1/2 min-h-screen relative overflow-hidden">
                            {/* 3D visualization or product showcase */}
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-emerald-500/10" />

                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 1, delay: 0.5 }}
                                className="absolute inset-0 flex items-center justify-center"
                            >
                                <div className="relative w-full max-w-2xl aspect-square">
                                    {/* Placeholder for 3D visualization */}
                                    <div
                                        className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/30 to-emerald-500/20 animate-spin"
                                        style={{ animationDuration: "20s" }}
                                    />
                                    <div
                                        className="absolute inset-8 rounded-full border-4 border-dashed border-border animate-spin"
                                        style={{ animationDuration: "15s", animationDirection: "reverse" }}
                                    />
                                    <div
                                        className="absolute inset-16 rounded-full bg-gradient-to-br from-primary/40 to-emerald-500/30 animate-spin"
                                        style={{ animationDuration: "10s" }}
                                    />

                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <Image
                                            src="/kalpi-logo.jpeg"
                                            alt="Kalpi Capital Logo"
                                            width={200}
                                            height={200}
                                            className="rounded-full"
                                        />
                                    </div>
                                </div>
                            </motion.div>

                            {/* Floating data points */}
                            {[...Array(20)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    className="absolute w-2 h-2 rounded-full bg-foreground"
                                    style={{
                                        left: `${Math.random() * 100}%`,
                                        top: `${Math.random() * 100}%`,
                                    }}
                                    animate={{
                                        opacity: [0, 1, 0],
                                        scale: [0, 1, 0],
                                    }}
                                    transition={{
                                        duration: Math.random() * 3 + 2,
                                        repeat: Number.POSITIVE_INFINITY,
                                        delay: Math.random() * 5,
                                    }}
                                />
                            ))}
                        </div>
                    </section>

                    {/* Horizontal scrolling features section */}
                    <section ref={handleSectionRef(1)} id="features" className="relative bg-background">
                        <div className="container mx-auto px-4 py-20">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                viewport={{ once: true }}
                                className="mb-16 max-w-3xl"
                            >
                                <h2 className="text-4xl md:text-6xl font-bold mb-6">
                                    Powerful <span className="text-primary">Features</span>
                                </h2>
                                <p className="text-xl text-muted-foreground">
                                    Our platform combines powerful technology with an intuitive interface to help you
                                    succeed in systematic portfolio construction.
                                </p>
                            </motion.div>
                        </div>

                        <HorizontalScrollSection>
                            {features.map((feature, index) => (
                                <FeatureItem key={index} {...feature} index={index} />
                            ))}
                        </HorizontalScrollSection>
                    </section>

                    {/* Stats section with animated counters */}
                    <section
                        ref={handleSectionRef(2)}
                        className="min-h-screen flex items-center relative overflow-hidden"
                    >
                        <div className="absolute inset-0 -z-10">
                            <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/20 to-background" />

                            {/* Grid lines */}
                            <div className="absolute inset-0 grid grid-cols-6 grid-rows-6">
                                {[...Array(7)].map((_, i) => (
                                    <div
                                        key={`v-${i}`}
                                        className="absolute top-0 bottom-0 w-px bg-border"
                                        style={{ left: `${(i / 6) * 100}%` }}
                                    />
                                ))}
                                {[...Array(7)].map((_, i) => (
                                    <div
                                        key={`h-${i}`}
                                        className="absolute left-0 right-0 h-px bg-border"
                                        style={{ top: `${(i / 6) * 100}%` }}
                                    />
                                ))}
                            </div>
                        </div>

                        <div className="container mx-auto px-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                                {[
                                    { value: 500, label: "Strategies Created" },
                                    { value: 98, label: "Success Rate" },
                                    { value: 10000, label: "Backtests Run" },
                                    { value: 50, label: "Institutional Clients" },
                                ].map((stat, index) => (
                                    <ParallaxSection key={index} speed={0.2 * (index + 1)}>
                                        <motion.div
                                            initial={{ opacity: 0, y: 30 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.5, delay: index * 0.1 }}
                                            viewport={{ once: true }}
                                            className="text-center"
                                        >
                                            <div className="text-5xl md:text-7xl font-bold mb-4 text-primary">
                                                <AnimatedCounter value={stat.value} />
                                            </div>
                                            <div className="text-xl text-muted-foreground">{stat.label}</div>
                                        </motion.div>
                                    </ParallaxSection>
                                ))}
                            </div>

                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.5 }}
                                viewport={{ once: true }}
                                className="mt-32 text-center max-w-3xl mx-auto"
                            >
                                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                                    India's First <span className="text-primary">Systematic Quantitative</span> Research
                                    Platform
                                </h2>
                                <p className="text-xl text-muted-foreground mb-8">
                                    Join thousands of investors who are already using Kalpi Capital to build Quant
                                    portfolios.
                                </p>
                                <MagneticButton className="inline-flex items-center bg-foreground text-background rounded-full px-8 py-4 font-medium hover:bg-foreground/90 transition-colors">
                                    <span className="flex items-center">
                                        Join the Revolution <ArrowUpRight className="ml-2 h-5 w-5" />
                                    </span>
                                </MagneticButton>
                            </motion.div>
                        </div>
                    </section>

                    {/* CTA section with split design */}
                    <section ref={handleSectionRef(3)} className="min-h-screen flex flex-col lg:flex-row">
                        <div className="w-full lg:w-1/2 min-h-[50vh] lg:min-h-screen bg-primary relative overflow-hidden">
                            <div className="absolute inset-0 flex items-center justify-center p-8">
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.8 }}
                                    viewport={{ once: true }}
                                    className="text-center"
                                >
                                    <h2 className="text-4xl md:text-6xl font-bold mb-6 text-primary-foreground">
                                        Ready to Start?
                                    </h2>
                                    <p className="text-xl text-primary-foreground/90 mb-8 max-w-lg mx-auto">
                                        Create your first quantitative strategy in minutes, no coding required.
                                    </p>
                                    <MagneticButton className="bg-background text-primary rounded-full px-8 py-4 font-medium hover:bg-background/90 transition-colors">
                                        <span className="flex items-center">
                                            Start Free Trial <ArrowRight className="ml-2 h-5 w-5" />
                                        </span>
                                    </MagneticButton>
                                </motion.div>
                            </div>

                            {/* Animated background elements */}
                            <div className="absolute inset-0 -z-10">
                                {[...Array(10)].map((_, i) => (
                                    <motion.div
                                        key={i}
                                        className="absolute rounded-full bg-primary-foreground/10"
                                        style={{
                                            width: `${Math.random() * 300 + 100}px`,
                                            height: `${Math.random() * 300 + 100}px`,
                                            left: `${Math.random() * 100}%`,
                                            top: `${Math.random() * 100}%`,
                                        }}
                                        animate={{
                                            x: [0, Math.random() * 50 - 25],
                                            y: [0, Math.random() * 50 - 25],
                                        }}
                                        transition={{
                                            repeat: Number.POSITIVE_INFINITY,
                                            repeatType: "reverse",
                                            duration: Math.random() * 10 + 10,
                                        }}
                                    />
                                ))}
                            </div>
                        </div>

                        <div className="w-full lg:w-1/2 min-h-[50vh] lg:min-h-screen flex items-center justify-center p-8 lg:p-16">
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                                viewport={{ once: true }}
                                className="max-w-xl"
                            >
                                <h3 className="text-3xl md:text-4xl font-bold mb-8">
                                    What Our <span className="text-primary">Users Say</span>
                                </h3>

                                <div className="space-y-8">
                                    {[1, 2, 3].map((_, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.5, delay: index * 0.2 }}
                                            viewport={{ once: true }}
                                            className="p-6 rounded-2xl border border-border hover:border-primary transition-colors"
                                        >
                                            <div className="flex items-center gap-4 mb-4">
                                                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                                                    {["A", "R", "S"][index]}
                                                </div>
                                                <div>
                                                    <p className="font-medium">Portfolio Manager</p>
                                                    <p className="text-sm text-muted-foreground">Investment Firm</p>
                                                </div>
                                            </div>
                                            <p className="text-muted-foreground">
                                                "Kalpi Capital has transformed how we build and test quantitative
                                                strategies. The no-code interface makes it accessible to our entire
                                                team, not just the developers."
                                            </p>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    </section>
                </main>

                {/* Footer */}
                <footer className="border-t border-border py-12">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                            <div>
                                <Link href="/" className="text-foreground text-2xl font-bold mb-6 inline-block">
                                    KALPI
                                </Link>
                                <p className="text-muted-foreground mb-4">
                                    Empowering portfolio managers with advanced quantitative research solutions.
                                </p>
                                <div className="flex gap-4">
                                    {["Twitter", "LinkedIn", "GitHub"].map((social, index) => (
                                        <Link
                                            key={index}
                                            href="#"
                                            className="text-muted-foreground hover:text-foreground transition-colors"
                                        >
                                            {social}
                                        </Link>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h3 className="text-foreground font-medium mb-4">Product</h3>
                                <ul className="space-y-2">
                                    {["Strategy Builder", "Backtesting", "Portfolio Creation", "Marketplace"].map(
                                        (item, index) => (
                                            <li key={index}>
                                                <Link
                                                    href="#"
                                                    className="text-muted-foreground hover:text-foreground transition-colors"
                                                >
                                                    {item}
                                                </Link>
                                            </li>
                                        )
                                    )}
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-foreground font-medium mb-4">Company</h3>
                                <ul className="space-y-2">
                                    {["About", "Careers", "Blog", "Contact"].map((item, index) => (
                                        <li key={index}>
                                            <Link
                                                href="#"
                                                className="text-muted-foreground hover:text-foreground transition-colors"
                                            >
                                                {item}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-foreground font-medium mb-4">Subscribe</h3>
                                <p className="text-muted-foreground mb-4">
                                    Get the latest updates on market trends and quantitative research.
                                </p>
                                <div className="flex">
                                    <input
                                        type="email"
                                        placeholder="Your email"
                                        className="bg-accent border border-input rounded-l-full px-4 py-2 text-foreground w-full focus:outline-none focus:border-primary"
                                    />
                                    <button className="bg-primary text-primary-foreground rounded-r-full px-4 hover:bg-primary/90 transition-colors">
                                        <ArrowRight size={20} />
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="border-t border-border pt-6 flex flex-col md:flex-row justify-between items-center">
                            <p className="text-muted-foreground text-sm">© 2025 Kalpi Capital. All rights reserved.</p>
                            <div className="flex gap-6 mt-4 md:mt-0">
                                {["Terms", "Privacy", "Cookies"].map((item, index) => (
                                    <Link
                                        key={index}
                                        href="#"
                                        className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                                    >
                                        {item}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
}
