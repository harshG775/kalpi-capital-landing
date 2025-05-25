import { Button } from "@/components/ui/button";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { motion } from "framer-motion";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
export default function CTASection() {
    return (
        <section className="pt-16 md:pt-24 bg-primary text-primary-foreground">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-6xl font-bold mb-6 text-center">
                            Unlock Your Sales Team&apos;s Full Potential
                        </h2>
                        <p className="max-w-xl mx-auto mt-8 text-xl text-center text-primary-foreground/90 font-medium mb-8">

                            Streamline operations and drive results with our cutting-edge quant investing platform.
                        </p>
                        <div className="flex justify-center w-full py-8 max-w-2xl mx-auto">
                            <Button
                                asChild
                                className=" h-14 rounded-4xl px-16 has-[>svg]:px-6 bg-primary-foreground text-primary hover:bg-primary-foreground/80"
                            >
                                <MagneticButton>
                                    Start for Free
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </MagneticButton>
                            </Button>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <div className="bg-muted p-1 rounded-t-xl overflow-hidden max-w-3xl mx-auto h-[480px]">
                            <div className="h-8 bg-muted flex items-center px-4">
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-500" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                                    <div className="w-3 h-3 rounded-full bg-green-500" />
                                </div>
                            </div>
                            <Image
                                src="/hero-image.png"
                                alt="Kalpi Capital Platform"
                                width={600}
                                height={400}
                                className="h-[480px] w-full object-cover"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
