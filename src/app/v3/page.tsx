"use client";
import Navbar from "./_components/Navbar";
import Footer from "./_components/Footer";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const RollingTextAnimation = ({ phrases }: { phrases: string[] }) => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % phrases.length);
        }, 2000);

        return () => clearInterval(intervalId);
    }, [phrases.length]);

    return (
        <div
            style={{
                fontSize: "2rem",
                fontWeight: "bold",
                height: "3rem", 
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
                position: "relative",
            }}
        >
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
                        textAlign: "center",
                    }}
                >
                    {phrases[index]}
                </motion.div>
            </AnimatePresence>
        </div>
    );
};

export default function V3page() {
    const phrases = ["Quant Systematic", "AI-Powered", "Data-Driven", "No-Code"];

    return (
        <div>
            <Navbar />
            <RollingTextAnimation phrases={phrases} />
            <main></main>
            <Footer />
        </div>
    );
}
