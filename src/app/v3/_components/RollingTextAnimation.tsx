"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export const RollingTextAnimation = ({ phrases, className }: { phrases: string[]; className?: string }) => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % phrases.length);
        }, 2000);

        return () => clearInterval(intervalId);
    }, [phrases.length]);

    return (
        <div className={cn("text-4xl h-14 sm:text-5xl sm:h-18 flex overflow-hidden relative", className)}>
            <AnimatePresence mode="sync">
                <motion.div
                    key={`${index}${phrases[index]}`}
                    initial={{ y: "100%" }}
                    animate={{ y: "0%" }}
                    exit={{ y: "-100%" }}
                    transition={{
                        duration: 0.5,
                        ease: "easeInOut",
                    }}
                    style={{
                        position: "absolute",
                        width: "100%",
                    }}
                >
                    {phrases[index]}
                </motion.div>
            </AnimatePresence>
        </div>
    );
};
