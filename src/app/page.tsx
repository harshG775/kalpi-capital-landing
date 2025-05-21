"use client";

import type React from "react";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from "framer-motion";
import Image from "next/image";
import {
    ChevronRight,
    ArrowRight,
    Zap,
    BarChart3,
    TrendingUp,
    BrainCircuit,
    Users,
    Shield,
    Play,
    Check,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useMobile } from "@/hooks/use-mobile";
import Footer from "@/components/ui/footer";

// Typing for feature cards
interface FeatureItem {
    icon: React.ElementType;
    title: string;
    description: string;
}

// Typing for workflow steps
interface WorkflowStep {
    step: number;
    title: string;
    description: string;
}

// Animated text for hero section
const AnimatedText = () => {
    const phrases = ["Quant Systematic", "AI-Powered", "Data-Driven", "No-Code"];
    const [currentPhrase, setCurrentPhrase] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setIsAnimating(true);
            setTimeout(() => {
                setCurrentPhrase((prev) => (prev + 1) % phrases.length);
                setIsAnimating(false);
            }, 500);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <span className="relative inline-block min-w-[280px] h-[60px] md:min-w-[320px] md:h-[70px]">
            <AnimatePresence mode="wait">
                <motion.span
                    key={currentPhrase}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -40 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0 text-[#4CAF50] bg-clip-text text-transparent bg-gradient-to-r from-[#4CAF50] to-[#8BC34A]"
                >
                    {phrases[currentPhrase]}
                </motion.span>
            </AnimatePresence>
        </span>
    );
};

// Floating elements for background
const FloatingElements = () => {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(8)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute rounded-full bg-gradient-to-br from-[#4CAF50]/10 to-[#8BC34A]/5"
                    style={{
                        width: `${Math.random() * 300 + 100}px`,
                        height: `${Math.random() * 300 + 100}px`,
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        filter: "blur(40px)",
                    }}
                    animate={{
                        x: [0, Math.random() * 50 - 25],
                        y: [0, Math.random() * 50 - 25],
                    }}
                    transition={{
                        repeat: Number.POSITIVE_INFINITY,
                        repeatType: "reverse",
                        duration: Math.random() * 10 + 15,
                    }}
                />
            ))}
        </div>
    );
};

// Feature card component with hover effect
const FeatureCard = ({ icon: Icon, title, description, index }: FeatureItem & { index: number }) => {
    const isMobile = useMobile();
    const cardRef = useRef<HTMLDivElement>(null);
    const [isHovered, setIsHovered] = useState(false);

    // Only apply these effects on non-mobile devices
    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (isMobile || !cardRef.current) return;

        const rect = cardRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;

        cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    };

    const handleMouseLeave = () => {
        if (isMobile || !cardRef.current) return;
        cardRef.current.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg)";
        setIsHovered(false);
    };

    return (
        <motion.div
            ref={cardRef}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={handleMouseLeave}
            className="h-full"
        >
            <Card className="h-full overflow-hidden border border-neutral-200/50 dark:border-neutral-800/50 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md hover:shadow-xl transition-all duration-300 group">
                <div className="p-6 space-y-4 relative z-10">
                    <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-[#4CAF50]/20 to-[#8BC34A]/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Icon className="h-6 w-6 text-[#4CAF50]" />
                    </div>
                    <h3 className="text-xl font-semibold">{title}</h3>
                    <p className="text-muted-foreground dark:text-neutral-400">{description}</p>
                </div>

                {/* Gradient background that moves on hover */}
                <div
                    className="absolute inset-0 bg-gradient-to-br from-[#4CAF50]/5 via-transparent to-[#8BC34A]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                        transform: isHovered ? "translateX(10%) translateY(10%)" : "translateX(0) translateY(0)",
                        transition: "transform 0.3s ease-out",
                    }}
                />
            </Card>
        </motion.div>
    );
};

// Workflow step component with animation
const WorkflowStepCard = ({ step, title, description, index }: WorkflowStep & { index: number }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="relative z-10"
        >
            <Card className="relative overflow-hidden bg-white/90 dark:bg-neutral-900/90 backdrop-blur-md border border-neutral-200/50 dark:border-neutral-800/50 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="p-6">
                    <div className="flex flex-col items-center text-center">
                        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#4CAF50] to-[#8BC34A] text-white flex items-center justify-center font-bold text-xl mb-4 shadow-lg">
                            {step}
                        </div>
                        <h3 className="text-xl font-semibold mb-3">{title}</h3>
                        <p className="text-muted-foreground dark:text-neutral-400">{description}</p>
                    </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#4CAF50]/10 to-[#8BC34A]/5 rounded-bl-full" />
                <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-[#4CAF50]/10 to-[#8BC34A]/5 rounded-tr-full" />
            </Card>
        </motion.div>
    );
};

// Testimonial card component
const TestimonialCard = ({ index }: { index: number }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white/90 dark:bg-neutral-900/90 backdrop-blur-md p-6 rounded-xl shadow-md border border-neutral-200/50 dark:border-neutral-800/50 hover:shadow-xl transition-all duration-300"
        >
            <div className="flex flex-col h-full">
                <div className="flex items-center gap-1 text-[#4CAF50]">
                    {[...Array(5)].map((_, j) => (
                        <svg
                            key={j}
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                        </svg>
                    ))}
                </div>
                <p className="my-4 text-muted-foreground dark:text-neutral-300 flex-grow">
                    "Kalpi Capital has transformed how we build and test quantitative strategies. The no-code interface
                    makes it accessible to our entire team, not just the developers."
                </p>
                <div className="flex items-center gap-3 mt-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#4CAF50]/20 to-[#8BC34A]/20 flex items-center justify-center text-[#4CAF50] font-bold">
                        {["A", "R", "S"][index]}
                    </div>
                    <div>
                        <p className="font-medium">Portfolio Manager</p>
                        <p className="text-sm text-muted-foreground dark:text-neutral-400">Investment Firm</p>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default function HomePage() {
    const [mounted, setMounted] = useState(false);

    // Scroll animations
    const { scrollYProgress } = useScroll();
    const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

    // Parallax effect for hero section
    const heroY = useTransform(smoothProgress, [0, 0.5], [0, 150]);

    // Features data
    const features: FeatureItem[] = [
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

    // Workflow steps
    const workflowSteps: WorkflowStep[] = [
        {
            step: 1,
            title: "Build Your Strategy",
            description:
                "Use our visual strategy builder to create your quantitative strategies with time-series & cross-section operations.",
        },
        {
            step: 2,
            title: "Backtest & Optimize",
            description: "Test your strategy against historical data to validate performance and optimize parameters.",
        },
        {
            step: 3,
            title: "Portfolio Creation",
            description: "Create equal-weighted or custom-weighted portfolios with rebalancing options at ease.",
        },
    ];

    // Handle theme toggle
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    return (
        <>
            <main className="flex-1 pt-16">
                {/* Hero Section with animated text - Inspired by D-ID.com and Graphy.app */}
                <section className="relative py-18 overflow-hidden">
                    {/* Animated background elements */}
                    <FloatingElements />

                    <motion.div style={{ y: heroY }} className="container px-4 mx-auto relative z-10">
                        <div className="max-w-4xl mx-auto text-center space-y-8">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                            >
                                <span className="inline-block py-1 px-3 text-sm font-medium bg-gradient-to-r from-[#4CAF50]/10 to-[#8BC34A]/10 text-[#4CAF50] rounded-full mb-4 backdrop-blur-sm border border-[#4CAF50]/20">
                                    India's First Systematic Quantitative Research Platform
                                </span>
                            </motion.div>

                            <motion.h1
                                className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-b from-neutral-900 to-neutral-600 dark:from-white dark:to-neutral-400"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                            >
                                We Democratize <br className="hidden sm:block" />
                                <AnimatedText /> <br className="hidden sm:block" />
                                Investing
                            </motion.h1>

                            <motion.p
                                className="text-xl text-muted-foreground dark:text-neutral-300 max-w-2xl mx-auto"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                            >
                                Create, backtest and deploy Quant AI/ML portfolios without writing code. Harness the
                                power of data-driven decisions.
                            </motion.p>

                            <motion.div
                                className="flex flex-col sm:flex-row gap-4 pt-4 justify-center"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.6 }}
                            >
                                <Button
                                    size="lg"
                                    className="bg-gradient-to-r from-[#4CAF50] to-[#8BC34A] hover:from-[#3d8b40] hover:to-[#7CB342] text-white group relative overflow-hidden"
                                >
                                    <span className="relative z-10 flex items-center">
                                        Get Started
                                        <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                    </span>
                                    <span className="absolute inset-0 bg-gradient-to-r from-[#3d8b40] to-[#7CB342] translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                                </Button>
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="backdrop-blur-sm border-neutral-200 dark:border-neutral-800 group"
                                >
                                    <span className="flex items-center">
                                        <Play className="mr-2 h-4 w-4" />
                                        Watch Demo
                                    </span>
                                </Button>
                            </motion.div>
                        </div>

                        {/* Hero image or mockup */}
                        <motion.div
                            className="mt-16 max-w-5xl mx-auto"
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                        >
                            <div className="relative rounded-xl overflow-hidden shadow-2xl border border-neutral-200/50 dark:border-neutral-800/50">
                                <div className="absolute inset-0 bg-gradient-to-tr from-[#4CAF50]/10 to-[#8BC34A]/5" />
                                <Image
                                    src="/home-hero.jpg"
                                    alt="Kalpi Capital Platform"
                                    width={1200}
                                    height={600}
                                    className="w-full h-auto rounded-xl"
                                />

                                {/* Decorative elements */}
                                <div className="absolute top-4 left-4 flex space-x-2">
                                    <div className="w-3 h-3 rounded-full bg-red-500" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                                    <div className="w-3 h-3 rounded-full bg-green-500" />
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Scrolling indicator */}
                    <motion.div
                        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.2, duration: 0.6 }}
                    >
                        <motion.div
                            className="w-6 h-10 border-2 border-neutral-400 dark:border-neutral-600 rounded-full flex justify-center"
                            initial={{ y: 0 }}
                            animate={{ y: [0, 10, 0] }}
                            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
                        >
                            <motion.div
                                className="w-1.5 h-1.5 bg-neutral-400 dark:bg-neutral-600 rounded-full mt-2"
                                animate={{ y: [0, 15, 0] }}
                                transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
                            />
                        </motion.div>
                        <span className="text-xs text-neutral-400 dark:text-neutral-600 mt-2">Scroll</span>
                    </motion.div>
                </section>

                {/* Trusted by section */}
                <section className="py-12 border-y border-neutral-200/50 dark:border-neutral-800/50 bg-white/50 dark:bg-neutral-900/50 backdrop-blur-sm">
                    <div className="container px-4 mx-auto">
                        <div className="text-center mb-8">
                            <p className="text-sm font-medium text-neutral-500 dark:text-neutral-400">
                                TRUSTED BY LEADING INVESTMENT FIRMS
                            </p>
                        </div>
                        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
                            {[1, 2, 3, 4, 5].map((i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0.5 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ duration: 0.5 }}
                                    viewport={{ once: true }}
                                    whileHover={{ scale: 1.05 }}
                                >
                                    <div className="h-8 w-24 bg-neutral-200 dark:bg-neutral-800 rounded-md opacity-50" />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Features Section - Inspired by Wix.com/AI-Website-Builder */}
                <section id="features" className="py-20 relative overflow-hidden">
                    <FloatingElements />

                    <div className="container px-4 mx-auto relative z-10">
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <motion.span
                                className="inline-block py-1 px-3 text-sm font-medium bg-gradient-to-r from-[#4CAF50]/10 to-[#8BC34A]/10 text-[#4CAF50] rounded-full mb-4 backdrop-blur-sm border border-[#4CAF50]/20"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                viewport={{ once: true }}
                            >
                                POWERFUL FEATURES
                            </motion.span>

                            <motion.h2
                                className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-neutral-900 to-neutral-700 dark:from-white dark:to-neutral-300"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                                viewport={{ once: true }}
                            >
                                Why Choose <span className="text-[#4CAF50]">Kalpi Capital?</span>
                            </motion.h2>
                            <motion.p
                                className="text-xl text-muted-foreground dark:text-neutral-300"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                viewport={{ once: true }}
                            >
                                Our platform combines powerful technology with an intuitive interface to help you
                                succeed in systematic portfolio construction.
                            </motion.p>
                        </div>

                        {/* Feature cards with overlapping effect */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
                            {/* Decorative elements */}
                            <div className="absolute top-1/4 left-0 w-64 h-64 bg-gradient-to-br from-[#4CAF50]/10 to-[#8BC34A]/5 rounded-full filter blur-3xl -z-10" />
                            <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-gradient-to-br from-[#8BC34A]/10 to-[#4CAF50]/5 rounded-full filter blur-3xl -z-10" />

                            {features.map((feature, index) => (
                                <FeatureCard key={index} {...feature} index={index} />
                            ))}
                        </div>
                    </div>
                </section>

                {/* How It Works Section */}
                <section
                    id="how-it-works"
                    className="py-20 relative bg-gradient-to-b from-white to-neutral-50 dark:from-neutral-950 dark:to-black"
                >
                    <div className="container px-4 mx-auto">
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <motion.span
                                className="inline-block py-1 px-3 text-sm font-medium bg-gradient-to-r from-[#4CAF50]/10 to-[#8BC34A]/10 text-[#4CAF50] rounded-full mb-4 backdrop-blur-sm border border-[#4CAF50]/20"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                viewport={{ once: true }}
                            >
                                SIMPLE PROCESS
                            </motion.span>

                            <motion.h2
                                className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-neutral-900 to-neutral-700 dark:from-white dark:to-neutral-300"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                                viewport={{ once: true }}
                            >
                                How It <span className="text-[#4CAF50]">Works</span>
                            </motion.h2>
                            <motion.p
                                className="text-xl text-muted-foreground dark:text-neutral-300"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                viewport={{ once: true }}
                            >
                                Get started with Kalpi quant research platform in just a few simple steps
                            </motion.p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                            {/* Connecting line */}
                            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-[#4CAF50]/30 via-[#8BC34A]/30 to-[#4CAF50]/30 -translate-y-1/2 z-0" />

                            {workflowSteps.map((item, index) => (
                                <WorkflowStepCard key={index} {...item} index={index} />
                            ))}
                        </div>

                        {/* Call to action button */}
                        <motion.div
                            className="mt-16 text-center"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            <Button
                                size="lg"
                                className="bg-gradient-to-r from-[#4CAF50] to-[#8BC34A] hover:from-[#3d8b40] hover:to-[#7CB342] text-white group relative overflow-hidden"
                            >
                                <span className="relative z-10 flex items-center">
                                    Start Building Your Strategy
                                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                </span>
                                <span className="absolute inset-0 bg-gradient-to-r from-[#3d8b40] to-[#7CB342] translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                            </Button>
                        </motion.div>
                    </div>
                </section>

                {/* Testimonials Section */}
                <section className="py-20 relative overflow-hidden">
                    <FloatingElements />

                    <div className="container px-4 mx-auto relative z-10">
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <motion.span
                                className="inline-block py-1 px-3 text-sm font-medium bg-gradient-to-r from-[#4CAF50]/10 to-[#8BC34A]/10 text-[#4CAF50] rounded-full mb-4 backdrop-blur-sm border border-[#4CAF50]/20"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                viewport={{ once: true }}
                            >
                                TESTIMONIALS
                            </motion.span>

                            <motion.h2
                                className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-neutral-900 to-neutral-700 dark:from-white dark:to-neutral-300"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                                viewport={{ once: true }}
                            >
                                What Our <span className="text-[#4CAF50]">Users Say</span>
                            </motion.h2>
                            <motion.p
                                className="text-xl text-muted-foreground dark:text-neutral-300"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                viewport={{ once: true }}
                            >
                                Hear from portfolio managers and quant researchers who use our platform
                            </motion.p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[0, 1, 2].map((i) => (
                                <TestimonialCard key={i} index={i} />
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-20 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#4CAF50] to-[#8BC34A]" />

                    {/* Animated background elements */}
                    <div className="absolute inset-0 overflow-hidden">
                        {[...Array(5)].map((_, i) => (
                            <motion.div
                                key={i}
                                className="absolute rounded-full bg-white/5"
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

                    <div className="container px-4 mx-auto relative z-10">
                        <motion.div
                            className="max-w-4xl mx-auto text-center text-white"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready for the future of Investing?</h2>
                            <p className="text-xl mb-8 text-white/90">
                                Join thousands of investors who are already using Kalpi Capital to build Quant
                                portfolios.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button size="lg" className="bg-white text-[#4CAF50] hover:bg-white/90 group">
                                    <span className="flex items-center">
                                        Start Free Trial
                                        <Check className="ml-2 h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </span>
                                </Button>
                                <Button
                                    size="lg"
                                    className="bg-transparent text-white border border-white hover:bg-white/10"
                                >
                                    Schedule Demo
                                </Button>
                            </div>

                            {/* Features list */}
                            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                                {["No credit card required", "14-day free trial", "Cancel anytime"].map((item, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: i * 0.1 }}
                                        viewport={{ once: true }}
                                        className="flex items-center"
                                    >
                                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-white/20 flex items-center justify-center mr-3">
                                            <Check className="h-3 w-3 text-white" />
                                        </div>
                                        <span className="text-white/90">{item}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}
