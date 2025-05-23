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
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            Smart Follow-Ups, <span className="text-primary">Always on Time</span>
                        </h2>
                        <p className="text-lg text-muted-foreground font-medium mb-8">
                            It&apos;s easy to set up automated follow-ups when you have Kalpi&apos;s AI on your side.
                            Our system learns from successful strategies to suggest optimal rebalancing times.
                        </p>
                        <BadgeWithIcon
                            texts={["Automatic Task Detection", "Draft Email Follow-Ups"]}
                            className="mt-8"
                            iconColor="green"
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <IntroductoryMeeting />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

function IntroductoryMeeting() {
    return (
        <div>
            <div className="flex items-center gap-2 bg-background p-4 rounded-full shadow-xl">
                <div>
                    <CalendarDaysIcon className="size-12 bg-blue-900 text-blue-100 rounded-full p-3" />
                </div>
                <div className="font-semibold text-xl text-gray-900">Introductory Meeting</div>
                <div className="ml-auto">
                    <Badge className="bg-blue-400/10 text-gray-950 rounded-full">Nov 13</Badge>
                </div>
            </div>
            <div className="pl-16">
                <div className="flex items-center gap-2 bg-blue-200/80 p-2 rounded-full mt-4">
                    <Cloud className="size-10 bg-white text-blue-950 rounded-full p-3" />
                    <div className="font-medium text-gray-900">Cloud Storage</div>
                    <div className="ml-auto">
                        <div className="rounded-full bg-rose-400 text-rose-50 px-3 py-1 size-10 flex justify-center items-center font-semibold">
                            JR
                        </div>
                    </div>
                </div>
                <div className="flex items-center gap-2 bg-blue-200/80 p-2 rounded-full mt-4">
                    <Cloud className="size-10 bg-white text-blue-950 rounded-full p-3" />
                    <div className="font-medium text-gray-900">Send Pricing Options</div>
                    <div className="ml-auto">
                        <div className="rounded-full bg-rose-400 text-rose-50 px-3 py-1 size-10 flex justify-center items-center font-semibold">
                            AD
                        </div>
                    </div>
                </div>
                <div className="flex items-center gap-2 bg-blue-200/80 p-2 rounded-full mt-4">
                    <Cloud className="size-10 bg-white text-blue-950 rounded-full p-3" />
                    <div className="font-medium text-gray-900">Schedule Next Meeting</div>
                    <div className="ml-auto">
                        <div className="rounded-full bg-rose-400 text-rose-50 px-3 py-1 size-10 flex justify-center items-center font-semibold">
                            JR
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex items-start gap-4 p-4 mt-4">
                <div className=" rounded-full size-12 overflow-hidden ">
                    <img
                        src="https://framerusercontent.com/images/t3tANQCYnree6SiGycrQvOcOI.png"
                        alt="feature-3"
                        className="w-full h-full object-contain"
                    />
                </div>
                <div>
                    <div className="font-semibold">Khari Devin</div>
                    <div className="text-xs">CTO</div>
                </div>
            </div>
        </div>
    );
}
