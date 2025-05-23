import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Check, StarsIcon } from "lucide-react";
import Image from "next/image";
export default function FeatureHubSection() {
    return (
        <section id="how-it-works" className="py-16 md:py-24">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <Button variant="default" className="mb-6 h-6">
                        AI-Enabled Sales
                    </Button>
                    <h2 className="text-4xl md:text-6xl font-bold mb-6">
                        Your Modern <span className="text-primary">Sales Intelligence Hub</span>
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-300">
                        Kalpi brings together all the tools you need to build, test, and deploy quantitative investment
                        strategies in one place.
                    </p>
                </motion.div>

                <div className="relative">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="bg-white dark:bg-neutral-800 rounded-xl shadow-xl overflow-hidden border border-gray-200 dark:border-neutral-700 p-4"
                    >
                        <Image
                            src="/placeholder.svg?height=600&width=1200"
                            alt="Kalpi Capital Platform Hub"
                            width={1200}
                            height={600}
                            className="w-full h-auto rounded-lg"
                        />
                    </motion.div>

                    {/* Floating elements */}
                    <div className="absolute -top-6 left-1/4 bg-primary/10 p-3 rounded-lg shadow-lg backdrop-blur-sm border border-primary/20">
                        <div className="flex items-center gap-2">
                            <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-white">
                                <Check className="h-3 w-3" />
                            </div>
                            <div className="text-sm font-medium">Real-time Updates</div>
                        </div>
                    </div>

                    <div className="absolute top-1/3 -right-6 bg-primary/10 p-3 rounded-lg shadow-lg backdrop-blur-sm border border-primary/20">
                        <div className="flex items-center gap-2">
                            <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-white">
                                <Check className="h-3 w-3" />
                            </div>
                            <div className="text-sm font-medium">AI Recommendations</div>
                        </div>
                    </div>

                    <div className="absolute -bottom-6 left-1/3 bg-primary/10 p-3 rounded-lg shadow-lg backdrop-blur-sm border border-primary/20">
                        <div className="flex items-center gap-2">
                            <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-white">
                                <Check className="h-3 w-3" />
                            </div>
                            <div className="text-sm font-medium">Performance Tracking</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
