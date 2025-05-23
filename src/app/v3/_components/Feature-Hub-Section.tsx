import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Image from "next/image";
export default function FeatureHubSection() {
    return (
        <section id="how-it-works" className="py-16 md:py-24 bg-primary-foreground/20">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                   
                    <Badge variant="outline" className="mb-6 outline-1 bg-red-500 text-white outline-red-500 rounded-full">
                        AI-Enabled Sales
                    </Badge>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Your Modern <span className="text-primary">Sales Intelligence Hub</span>
                    </h2>
                    <p className="text-lg text-muted-foreground font-medium mb-8">
                        Kalpi brings together all the tools you need to build, test, and deploy quantitative investment
                        strategies in one place.
                    </p>
                </motion.div>

                <div className="relative max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <Image
                            src="/hub.png"
                            alt="Kalpi Capital Platform Hub"
                            width={1200}
                            height={600}
                            className="h-auto rounded-lg"
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
