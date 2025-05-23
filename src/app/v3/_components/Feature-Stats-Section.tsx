import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { ArrowRight, ChartNoAxesColumnIncreasing } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BadgeWithIcon } from "./BadgeWithIcon";
import { Badge } from "@/components/ui/badge";
import { MagneticButton } from "@/components/ui/magnetic-button";

export default function FeatureStatsSection() {
    return (
        <section className="py-16 md:py-24 ">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="relative order-2 lg:order-1"
                    >
                        <div className=" overflow-hidden p-8 grid gap-4 grid-cols-1 items-center justify-center">
                            <div className="bg-background border border-border rounded-2xl shadow-md p-8 max-w-96 relative left-12">
                                <div className="flex items-center gap-2">
                                    <ProgressCircle />
                                    <div className="flex flex-col">
                                        <span className="text-sm font-medium">57 %</span>
                                        <span className="text-sm font-medium">Sales Talk Ratio</span>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-background border border-border rounded-2xl shadow-md p-8 max-w-96 relative right-4 ">
                                <div className="flex items-center gap-2">
                                    <ChartNoAxesColumnIncreasing className="size-24 p-2 rounded-full text-primary" />
                                    <div className="flex flex-col">
                                        <span className="text-sm font-medium">8 / 10</span>
                                        <span className="text-sm font-medium">Excitement</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="order-1 lg:order-2"
                    >
                        <Badge variant="outline" className="mb-6 outline-1 outline-primary rounded-full">
                            Sales Activity Analytics
                        </Badge>
                        <h2 className="text-4xl md:text-6xl font-bold mb-6">
                            Your Pitch, <span className="text-primary">By the Numbers</span>
                        </h2>
                        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                            These are just the beginning of progress in quant and data-driven investing. Our platform is
                            designed to help you create, backtest, and deploy strategies with confidence.
                        </p>
                        <div>
                            <Button asChild>
                                <MagneticButton>
                                    Learn More
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </MagneticButton>
                            </Button>
                        </div>
                        <BadgeWithIcon
                            texts={["Sentiment Analysis", "Engagement", "Speaking Patterns"]}
                            className="mt-8"
                            iconColor="primary"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

const ProgressCircle = () => {
    const controls = useAnimation();
    const radius = 45;
    const strokeWidth = 10;
    const normalizedRadius = radius - strokeWidth / 2;
    const circumference = 2 * Math.PI * normalizedRadius;

    const initialPercent = 34;
    const finalPercent = 88;

    const initialOffset = circumference - (initialPercent / 100) * circumference;
    const finalOffset = circumference - (finalPercent / 100) * circumference;

    useEffect(() => {
        controls.start({
            strokeDashoffset: finalOffset,
            stroke: "#00c853", // green
            transition: { duration: 1.5 },
        });
    }, [controls, finalOffset]);

    return (
        <svg height={radius * 2} width={radius * 2}>
            <circle
                stroke="#eee"
                fill="transparent"
                strokeWidth={strokeWidth}
                r={normalizedRadius}
                cx={radius}
                cy={radius}
            />
            <motion.circle
                stroke="#fbc02d" // yellow
                fill="transparent"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeDasharray={circumference}
                strokeDashoffset={initialOffset}
                animate={controls}
                r={normalizedRadius}
                cx={radius}
                cy={radius}
            />
            <text
                x="50%"
                y="50%"
                dominantBaseline="middle"
                textAnchor="middle"
                fontSize="18"
                fontWeight="bold"
                fill="#0d1b2a"
            >
                {finalPercent}%
            </text>
        </svg>
    );
};
