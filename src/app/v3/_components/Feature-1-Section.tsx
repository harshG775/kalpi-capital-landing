import Image from "next/image";
import { motion } from "framer-motion";
import { BadgeWithIcon } from "./BadgeWithIcon";
import { Badge } from "@/components/ui/badge";

export default function Feature1Section() {
    return (
        <section className="py-16 md:py-24">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <Badge variant="outline" className="mb-6 outline-1 outline-pink-500 rounded-full">
                            Sales Insights
                        </Badge>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            Your Sales <span className="text-primary">Memory, Perfected</span>
                        </h2>
                        <p className="text-lg text-muted-foreground font-medium mb-8">
                            Kalpi Capital remembers every detail of your quant strategies, so you can focus on creating
                            new ones. Our AI-powered platform tracks all your backtests, optimizations, and performance
                            metrics.
                        </p>
                        <BadgeWithIcon
                            texts={["Auto-Attend", "Smart Extraction", "Customizable"]}
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
                        <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-xl overflow-hidden border border-gray-200 dark:border-neutral-700">
                            <Image
                                src="/placeholder.svg?height=500&width=600"
                                alt="Automated Follow-ups Interface"
                                width={600}
                                height={500}
                                className="w-full h-auto"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
