import Image from "next/image";
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
                        <MeetingMemory />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

function MeetingMemory() {
    const data = [
        {
            initials: "Kb",
            name: "Khari",
            theme: "bg-blue-500 text-blue-100",
            progressBars: [
                { width: "70%", color: "bg-blue-400/80", delay: 0.3 },
                { width: "85%", color: "bg-blue-300/80", delay: 0.4 },
                { width: "60%", color: "bg-blue-200/80", delay: 0.5 },
            ],
        },
        {
            initials: "SL",
            name: "Susan",
            theme: "bg-green-500 text-green-100",
            progressBars: [
                { width: "90%", color: "bg-green-400/80", delay: 0.3 },
                { width: "65%", color: "bg-green-300/80", delay: 0.4 },
                { width: "80%", color: "bg-green-200/80", delay: 0.5 },
            ],
        },
        {
            initials: "AD",
            name: "Alex",
            theme: "bg-purple-500 text-purple-100",
            progressBars: [
                { width: "50%", color: "bg-purple-400/80", delay: 0.3 },
                { width: "75%", color: "bg-purple-300/80", delay: 0.4 },
                { width: "95%", color: "bg-purple-200/80", delay: 0.5 },
            ],
        },
        {
            initials: "JD",
            name: "John Doe",
            theme: "bg-orange-500 text-orange-100",
            progressBars: [
                { width: "65%", color: "bg-orange-400/80", delay: 0.3 },
                { width: "45%", color: "bg-orange-300/80", delay: 0.4 },
                { width: "80%", color: "bg-orange-200/80", delay: 0.5 },
            ],
        },
    ];

    // Animation variants
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
            },
        },
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 100,
            },
        },
    };

    const progressBar = {
        hidden: { width: 0 },
        show: (custom: { width: string; delay: number }) => ({
            width: custom.width,
            transition: {
                delay: custom.delay,
                duration: 0.8,
                type: "spring",
                damping: 10,
            },
        }),
    };

    return (
        <motion.div className="relative" initial="hidden" animate="show" variants={container}>
            <motion.div className="flex flex-col gap-6 bg-background border border-border rounded-2xl shadow-md p-8">
                {data.map((user, idx) => (
                    <motion.div
                        key={idx}
                        className="flex items-center gap-8"
                        variants={item}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <div>
                            <motion.div
                                className={`rounded-full h-10 w-10 ${user.theme} flex items-center justify-center font-bold uppercase`}
                                whileHover={{ rotate: 360 }}
                                transition={{ type: "spring", stiffness: 200 }}
                            >
                                {user.initials}
                            </motion.div>
                        </div>
                        <div className="space-y-3 w-full">
                            <motion.div
                                className="font-medium text-lg"
                                initial={{ x: -10 }}
                                animate={{ x: 0 }}
                                transition={{ delay: 0.2 }}
                            >
                                {user.name}
                            </motion.div>

                            {user.progressBars.map((bar, i) => (
                                <div key={i} className="bg-muted-foreground/20 rounded-2xl h-2 overflow-hidden">
                                    <motion.div
                                        className={`${bar.color} rounded-2xl h-full`}
                                        custom={{ width: bar.width, delay: bar.delay }}
                                        variants={progressBar}
                                        initial="hidden"
                                        animate="show"
                                    />
                                </div>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </motion.div>

            <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, type: "spring", stiffness: 60 }}
                className="absolute top-16 right-6"
            >
                <Image src="/section-1.png" alt="feature-1" width={300} height={200} className="rounded-lg shadow-lg" />
            </motion.div>
        </motion.div>
    );
}
