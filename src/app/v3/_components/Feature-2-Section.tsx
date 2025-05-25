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
                        <MadeOmniscient />
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
                        <h2 className="font-lexend text-4xl md:text-5xl font-medium mb-6">
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

function MadeOmniscient() {
    const elements = [
        { name: "Deal", subname: "Deal", color: "bg-red-400 text-red-50" },
        { name: "Deal Owner", subname: "Deal", color: "bg-blue-400 text-blue-50" },
        { name: "Forecast Amount", subname: "Deal", color: "bg-yellow-400 text-yellow-50" },
        { name: "Next Step", subname: "Deal", color: "bg-slate-400 text-slate-50" },
        { name: "Pain Points", subname: "Deal", color: "bg-amber-400 text-amber-50" },
        { name: "Tech", subname: "Deal", color: "bg-indigo-400 text-indigo-50" },
        { name: "ARR", subname: "Company", color: "bg-lime-400 text-lime-50" },
        { name: "Company", subname: "Deal", color: "bg-blue-400 text-blue-50" },
        { name: "Company", subname: "Company", color: "bg-green-400 text-green-50" },
    ];

    return (
        <div className="relative h-[500px] w-full max-w-4xl mx-auto p-8">
            <div className="relative w-[500px] h-[500px] mx-auto">
                <motion.div
                    className="absolute inset-0 flex items-center justify-center z-10"
                    initial={{ scale: 0.4 }}
                    whileInView={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                >
                    <div className="relative h-48 w-48 rounded-full flex items-center justify-center overflow-hidden   ">
                        <Image src="/logo/center.jpeg" alt="Company Logo" fill className="object-contain" />
                    </div>
                    <div className="-z-10 absolute rounded-full inset-40 flex items-center justify-center bg-primary/40 blur-3xl" />
                </motion.div>

                {elements.map((item, index) => {
                    const total = elements.length;
                    const radius = 220;
                    const angle = (index * (360 / total) - 90) * (Math.PI / 180);
                    const x = Math.cos(angle) * radius;
                    const y = Math.sin(angle) * radius;


                    return (
                        <div
                            key={index}
                            className="absolute z-30"
                            style={{
                                left: "50%",
                                top: "50%",
                                transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`,
                            }}
                        >
                            <motion.div
                                animate={{
                                    y: [-8, 8, -8],
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: index * 0.15,
                                }}
                                className="transition-all duration-300 px-2 py-0.5 rounded-full shadow-md flex items-center gap-2 hover:scale-110"
                            >
                                <div>{item.name}</div>
                                <div className={`${item.color} px-2 py-0.5 rounded-full shadow-md`}>{item.subname}</div>
                            </motion.div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
