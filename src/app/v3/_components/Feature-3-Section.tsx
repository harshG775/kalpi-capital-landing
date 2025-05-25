import { motion } from "framer-motion";
import { BadgeWithIcon } from "./BadgeWithIcon";
import { Badge } from "@/components/ui/badge";
import { CalendarDaysIcon, Cloud } from "lucide-react";

export default function Feature3Section() {
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
                        <Badge variant="outline" className="mb-6 outline-1 outline-green-500 rounded-full">
                            Sales Activity Analytics
                        </Badge>
                        <h2 className="font-lexend text-4xl md:text-5xl font-medium mb-6">
                            LLM-Powered Stock <span className="text-primary">Research & Portfolio Insights</span>
                        </h2>
                        <p className="max-w-xl mt-8 text-lg text-muted-foreground font-medium mb-8">
                            Kalpi Capital integrates cutting-edge Large Language Models (LLMs) to provide you with
                            advanced stock research and portfolio insights. Get summaries, identify key factors, and
                            analyze information faster than ever before.
                        </p>
                        <BadgeWithIcon
                            texts={["Summaries", "Key Factors", "Portfolio Insights"]}
                            className="mt-8"
                            iconColor="green"
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="relative rounded-2xl overflow-hidden"
                    >
                        {/* <IntroductoryMeeting /> */}
                        <div className="bg-primary w-full h-[12%] absolute top-0 left-0"></div>
                        <video
                            playsInline
                            preload="auto"
                            autoPlay
                            loop
                            aria-label="Dashboard Final"
                            className="w-full h-full object-cover object-center"
                        >
                            <source src="https://sendbird.imgix.net/cms/Dashboard_Final.mp4" type="video/mp4" />
                        </video>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
function IntroductoryMeeting() {
    return (
        <div>
            <div className="flex items-center gap-2 bg-background px-4 py-2 rounded-full shadow-xl">
                <div>
                    <CalendarDaysIcon className="size-12 bg-primary text-primary-foreground rounded-full p-3" />
                </div>
                <div className="font-semibold text-xl text-foreground">Introductory Meeting</div>
                <div className="ml-auto">
                    <Badge className="bg-primary/10 text-foreground rounded-full">Nov 13</Badge>
                </div>
            </div>
            <div className="pl-16">
                {[
                    { text: "Cloud Storage", prefix: "JR", color: "bg-blue-400 text-blue-50" },
                    { text: "Send Pricing Options", prefix: "AD", color: "bg-red-400 text-red-50" },
                    { text: "Schedule Next Meeting", prefix: "JR", color: "bg-yellow-400 text-yellow-50" },
                ].map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-2 bg-gradient-to-r from-primary/40 to-primary/20 p-1.5 rounded-full mt-2"
                    >
                        <Cloud className="size-8 bg-background text-primary rounded-full p-2" />
                        <div className="font-medium text-foreground">{item.text}</div>
                        <div className="ml-auto">
                            <div
                                className={`rounded-full ${item.color} px-3 py-1 size-8 flex justify-center items-center font-semibold`}
                            >
                                {item.prefix}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
            <motion.div
                animate={{
                    y: [-10, 10, -10],
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="flex items-start gap-4 p-4 mt-4"
            >
                <div className="rounded-full size-12 overflow-hidden">
                    <img
                        src="https://framerusercontent.com/images/t3tANQCYnree6SiGycrQvOcOI.png"
                        alt="feature-3"
                        className="w-full h-full object-contain"
                    />
                </div>
                <div>
                    <div className="font-semibold text-foreground">Khari Devin</div>
                    <div className="text-xs text-muted-foreground">CTO</div>
                </div>
            </motion.div>
        </div>
    );
}
