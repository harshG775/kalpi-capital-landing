import { motion } from "framer-motion";
import { BadgeWithIcon } from "./BadgeWithIcon";
import { Badge } from "@/components/ui/badge";

export default function Feature1Section() {
    return (
        <section className="py-16 md:py-24">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <Badge variant="outline" className="mb-6 outline-1 outline-pink-500 rounded-full">
                            Automated Backtesting
                        </Badge>
                        <h2 className="font-lexend text-4xl md:text-5xl font-medium mb-6">
                            No-Code <span className="text-primary">Strategy Builder</span> with one click Backtest{" "}
                        </h2>
                        <p className="max-w-xl mt-8 text-lg text-muted-foreground font-medium mb-8">
                            Lets you to design and implement systematic trading strategies with an intuitive drag and
                            drop interface. You don't need programming skills to harness the power of quant investing
                            Our platform includes a powerful backtesting framework that allows you to evaluate the
                            historical performance of your strategies with a single click. Test your ideas rigorously
                            before deploying them in the real world
                        </p>
                        <BadgeWithIcon
                            texts={["Automated Backtesting", "No-Code Strategy Builder", "One-Click Backtest"]}
                            className="mt-8"
                            iconColor="pink"
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="md:mt-24 shadow-lg border border-border flex flex-col relative w-full aspect-video rounded-2xl overflow-hidden md:scale-110">
                            <video
                                className=" relative bottom-[10%]"
                                src="https://www.lyzr.ai/wp-content/uploads/2025/01/Screen-Recording-2025-01-08-at-8.39.57 PM-online-video-cutter.com-1.mp4#t=1"
                                autoPlay={true}
                                loop={true}
                                muted={true}
                                playsInline={true}
                                controlsList="nodownload"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

import React, { useState, useEffect } from "react";

const SalesInsightsChart = () => {
    const [animationKey, setAnimationKey] = useState(0);

    // Sample data representing quant strategy performance metrics
    const chartData = [
        {
            strategy: "Momentum Alpha",
            performance: 85,
            backtests: 150,
            sharpe: 2.4,
            color: "from-blue-500 to-blue-600",
        },
        {
            strategy: "Mean Reversion",
            performance: 92,
            backtests: 203,
            sharpe: 2.8,
            color: "from-green-500 to-green-600",
        },
        {
            strategy: "Risk Parity",
            performance: 78,
            backtests: 89,
            sharpe: 1.9,
            color: "from-purple-500 to-purple-600",
        },
        {
            strategy: "Volatility Surface",
            performance: 96,
            backtests: 267,
            sharpe: 3.2,
            color: "from-amber-500 to-amber-600",
        },
        {
            strategy: "Factor Model",
            performance: 88,
            backtests: 178,
            sharpe: 2.6,
            color: "from-red-500 to-red-600",
        },
        {
            strategy: "Pairs Trading",
            performance: 81,
            backtests: 124,
            sharpe: 2.2,
            color: "from-teal-500 to-teal-600",
        },
    ];

    // Restart animation every 8 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setAnimationKey((prev) => prev + 1);
        }, 10000);
        return () => clearInterval(interval);
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.6,
                staggerChildren: 0.15,
            },
        },
    };

    const barVariants = {
        hidden: {
            width: 0,
            opacity: 0,
            scale: 0.8,
        },
        visible: {
            width: "var(--target-width)",
            opacity: 1,
            scale: 1,
            transition: {
                duration: 1.2,
                ease: "easeOut",
            },
        },
    };

    const maxPerformance = Math.max(...chartData.map((item) => item.performance));

    return (
        <div className="w-full mx-auto p-8 bg-gradient-to-br from-background-50 to-muted rounded-3xl shadow-2xl shadow-primary/20">
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-8"
            >
                <h3 className="text-3xl font-bold text-foreground mb-3">Quant Strategy Performance</h3>
                <p className="text-muted-foreground text-lg">
                    AI-tracked backtests and optimization metrics across all strategies
                </p>
            </motion.div>

            {/* Chart Container */}
            <motion.div
                key={animationKey}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="space-y-4"
            >
                {chartData.map((item, index) => {
                    const widthPercentage = (item.performance / maxPerformance) * 100;

                    return (
                        <motion.div key={item.strategy} variants={barVariants} className="relative group">
                            {/* Strategy Label */}
                            <div className="flex justify-between items-center">
                                <h4 className="text-base font-semibold text-muted-foreground">{item.strategy}</h4>
                                <div className="flex items-center gap-4 text-sm text-gray-600">
                                    <span>{item.backtests} backtests</span>
                                    <span>Sharpe: {item.sharpe}</span>
                                    <span className="font-bold text-muted-foreground">{item.performance}%</span>
                                </div>
                            </div>

                            {/* Bar Container */}
                            <div className="relative h-4 bg-gray-100 rounded-full overflow-hidden shadow-inner">
                                {/* Animated Bar */}
                                <motion.div
                                    className={`h-full bg-gradient-to-r ${item.color} rounded-full relative overflow-hidden`}
                                    style={
                                        {
                                            "--target-width": `${widthPercentage}%`,
                                            width: 0,
                                        } as React.CSSProperties
                                    }
                                    variants={barVariants}
                                >
                                    {/* Shimmer Effect */}
                                    <motion.div
                                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                                        initial={{ x: "-100%" }}
                                        animate={{ x: "100%" }}
                                        transition={{
                                            duration: 2,
                                            delay: 0.5 + index * 0.15,
                                            ease: "easeInOut",
                                        }}
                                    />

                                    {/* Performance Badge */}
                                    <motion.div
                                        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-bold text-muted-foreground"
                                        initial={{ opacity: 0, scale: 0 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: 1 + index * 0.15, duration: 0.4 }}
                                    >
                                        {item.performance}%
                                    </motion.div>
                                </motion.div>
                            </div>

                            {/* Progress Indicators */}
                            <motion.div
                                className="flex justify-between mt-2 text-xs text-gray-500"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 1.5 + index * 0.1, duration: 0.6 }}
                            >
                                <span>0%</span>
                                <span>50%</span>
                                <span>100%</span>
                            </motion.div>
                        </motion.div>
                    );
                })}
            </motion.div>
        </div>
    );
};
