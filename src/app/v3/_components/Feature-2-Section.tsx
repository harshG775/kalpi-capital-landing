import Image from "next/image";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { BadgeWithIcon } from "./BadgeWithIcon";

export default function Feature2Section() {
    return (
        <section className="py-16 md:py-24">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="relative order-2 lg:order-1"
                    >
                        <div className="bg-white dark:bg-neutral-700 rounded-xl shadow-xl overflow-hidden border border-gray-200 dark:border-neutral-600">
                            <Image
                                src="/placeholder.svg?height=500&width=600"
                                alt="Portfolio Management Interface"
                                width={600}
                                height={500}
                                className="w-full h-auto"
                            />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="order-1 lg:order-2"
                    >
                        <Badge variant="outline" className="mb-6 outline-1 outline-red-500 rounded-full">
                            Automated CRM Updates
                        </Badge>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            Your CRM, <span className="text-primary">Made Omniscient</span>
                        </h2>
                        <p className="text-lg text-muted-foreground font-medium mb-8">
                            Our platform combines powerful technology with an intuitive interface to help you succeed in
                            systematic portfolio construction.
                        </p>
                        <BadgeWithIcon
                            texts={["Intelligent Mapping", "User-Configurable Rules"]}
                            className="mt-8"
                            iconColor="red"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
