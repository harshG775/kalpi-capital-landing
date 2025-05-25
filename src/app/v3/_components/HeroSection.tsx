import { motion } from "framer-motion";
import { RollingTextAnimation } from "./RollingTextAnimation";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, StarsIcon, TrendingUp } from "lucide-react";
import Image from "next/image";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { Badge } from "@/components/ui/badge";
import { Typewriter } from "../../../components/ui/Typewriter";
import { cn } from "@/lib/utils";

function FloatingElement({ children, ...props }: React.ComponentProps<typeof motion.div>) {
    return (
        <motion.div
            animate={{
                y: [-10, 10, -10],
            }}
            transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
            }}
            {...props}
        >
            {children}
        </motion.div>
    );
}

export default function HeroSection() {
    return (
        <section className="pt-28 md:pt-32 py-12 md:py-18 lg:px-0 px-4 overflow-hidden">
            <div className="max-w-[96rem] mx-auto ">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-top">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="space-y-10 sm:px-8"
                    >
                        <Badge variant="outline" className="border-primary rounded-full">
                            <StarsIcon className="h-10 w-10 text-primary inline-block" />
                            we empower <Typewriter texts={["AI-Powered", "Data-Driven", "No-Code"]} />
                        </Badge>
                        <h1 className="text-4xl sm:text-5xl font-bold space-y-4 mb-4">
                            We Democratize
                            <RollingTextAnimation
                                phrases={["Quant Systematic", "AI-Powered", "Data-Driven", "No-Code"]}
                                className="mt-4 text-primary"
                            />
                            Investing
                        </h1>
                        <p className="text-lg text-muted-foreground font-medium mb-8">
                            Create, backtest and deploy Quant AI/ML portfolios without writing code. Harness the power
                            of data-driven decisions.
                        </p>
                        <div className="flex flex-row gap-4">
                            <Button asChild className="h-14 rounded-4xl px-16 has-[>svg]:px-6">
                                <MagneticButton>
                                    Start Today for Free <ArrowRight className="ml-2 h-4 w-4" />
                                </MagneticButton>
                            </Button>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-xl overflow-hidden border border-gray-200 dark:border-neutral-700">
                            <div className="h-8 bg-gray-100 dark:bg-neutral-700 flex items-center px-4">
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-500" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                                    <div className="w-3 h-3 rounded-full bg-green-500" />
                                </div>
                            </div>
                            <Image
                                src="/hero-image.png"
                                alt="Kalpi Capital Platform"
                                width={800}
                                height={600}
                                className="w-full h-auto"
                            />
                        </div>

                        {/* Floating elements */}
                        <FloatingElement className="absolute -top-6 -left-6 bg-primary/10 p-4 rounded-lg shadow-lg backdrop-blur-sm border border-primary/20">
                            <div className="flex items-center gap-2">
                                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white">
                                    <Check className="h-4 w-4" />
                                </div>
                                <div className="text-sm font-medium">Strategy Optimized</div>
                            </div>
                        </FloatingElement>

                        <FloatingElement className="absolute -bottom-6 -right-6 bg-primary/10 p-4 rounded-lg shadow-lg backdrop-blur-sm border border-primary/20">
                            <div className="flex items-center gap-2">
                                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white">
                                    <TrendingUp className="h-4 w-4" />
                                </div>
                                <div className="text-sm font-medium">+28% Performance</div>
                            </div>
                        </FloatingElement>
                        {/* gradient */}
                        <div
                            className={cn(
                                "bg-gradient-to-br from-primary/20 to-primary/20 absolute -z-10 rounded-2xl blur-md scale-200 h-[25rem] w-[25rem] top-[55%] left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                            )}
                        />
                        <div
                            className={cn(
                                "absolute -z-20 rounded-2xl scale-200 w-[20rem] h-[21rem] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                            )}
                            style={{
                                boxShadow: `
                                  oklch(0.723 0.219 149.579 / 0.4) -5px 5px,
                                  oklch(0.723 0.219 149.579 / 0.3) -10px 10px,
                                  oklch(0.723 0.219 149.579 / 0.2) -15px 15px,
                                  oklch(0.723 0.219 149.579 / 0.1) -20px 20px,
                                  oklch(0.723 0.219 149.579 / 0.05) -25px 25px
                                `,
                            }}
                        />
                    </motion.div>
                </div>

                {/* Trusted by logos */}
                <div className="mt-20">
                    <p className="text-center text-sm text-muted-foreground font-semibold mb-6">
                        Built by experts from
                    </p>
                    <BrandMarquee />
                </div>
                <div>
                    <iframe
                        src="https://player.vimeo.com/video/1069361225?muted=1autopause=0loop=1app_id=122963"
                        width="100%"
                        height="100%"
                        className="max-w-5xl mx-auto aspect-video rounded-2xl mt-20"
                    ></iframe>
                </div>
            </div>
        </section>
    );
}

function BrandMarquee() {
    const images = [
        {
            src: "https://framerusercontent.com/images/d8aWQU3pV1OkH79dXhgZMFPdspk.svg",
            alt: "",
        },
        {
            src: "https://framerusercontent.com/images/lZLo6ENbuGE44c4bYtzSkNDM9ZU.png",
            alt: "Freja",
        },
        {
            src: "https://framerusercontent.com/images/xVzMD0TJ0Anqdg0kyzMqm1D60VQ.svg",
            alt: "",
        },
        {
            src: "https://framerusercontent.com/images/zSaxJPUdQcrhmMHx7b0ZlrNx4.png",
            alt: "",
        },
        {
            src: "https://framerusercontent.com/images/i3T3MQUv2ySYpKP4QHxzdLfIEPM.png",
            alt: "",
        },
        {
            src: "https://framerusercontent.com/images/cFJf5fMUK348H0qbvMHgWawn4N4.png",
            alt: "",
        },
        {
            src: "https://framerusercontent.com/images/Kt90z4GONzIEGDOmcTD9jelitEE.png",
            alt: "",
        },
        {
            src: "https://framerusercontent.com/images/2N6PuJxIx6rxwyC8kVMfXK6jU.png",
            alt: "Freja",
        },
        {
            src: "https://framerusercontent.com/images/p94Hsb2YZtNd98kPlLyYipM8pFg.png",
            alt: "",
        },
        {
            src: "https://framerusercontent.com/images/17WWoke6mdJCL0YihbLit0jDQFA.png",
            alt: "Freja",
        },
        {
            src: "https://framerusercontent.com/images/WoD4q9HFpUSD8sUpc1jhI4065Q.svg",
            alt: "Freja",
        },
        {
            src: "https://framerusercontent.com/images/kqWZb7I6kYBs2lGGXgnOWni4iQ.svg",
            alt: "Freja",
        },
        {
            src: "https://framerusercontent.com/images/xNUNVSTHwSBAgt9H7rXy3OC1nAw.svg",
            alt: "Freja",
        },
        {
            src: "https://framerusercontent.com/images/3dNDkHYn9BceXNdBBdnJiREERw.png",
            alt: "Freja",
        },
    ];
    return (
        <div className="flex overflow-hidden relative py-10 max-w-4xl mx-auto mask-x-from-90%">
            <motion.div
                animate={{
                    x: ["0%", "-100%"],
                }}
                transition={{
                    duration: 20,
                    ease: "linear",
                    repeat: Infinity,
                }}
                className="flex gap-8 items-center w-max"
            >
                {[...images, ...images].map((image, index) => (
                    <img
                        key={index}
                        src={image.src}
                        alt={image.alt}
                        className="grayscale-100 hover:grayscale-0"
                        style={{
                            height: "40px",
                            width: "auto",
                            flexShrink: 0,
                        }}
                    />
                ))}
            </motion.div>
        </div>
    );
}
