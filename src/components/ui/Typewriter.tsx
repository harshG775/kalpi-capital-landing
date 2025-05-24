"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export const Typewriter = ({
    texts,
    loop = true,
    speed = 50,
    deleteSpeed = 30,
    pauseDuration = 1500,
    ...rest
}: {
    texts: string[];
    loop?: boolean;
    speed?: number;
    deleteSpeed?: number;
    pauseDuration?: number;
}) => {
    const [displayText, setDisplayText] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        if (texts.length === 0) return;

        const currentText = texts[currentIndex];

        if (isPaused) {
            const pauseTimer = setTimeout(() => {
                setIsPaused(false);
                setIsDeleting(true);
            }, pauseDuration);
            return () => clearTimeout(pauseTimer);
        }

        const timer = setTimeout(
            () => {
                if (isDeleting) {
                    setDisplayText((prev) => prev.slice(0, -1));

                    if (displayText.length === 0) {
                        setIsDeleting(false);
                        if (loop || currentIndex < texts.length - 1) {
                            setCurrentIndex((prev) => (prev + 1) % texts.length);
                        }
                    }
                } else {
                    setDisplayText(currentText.slice(0, displayText.length + 1));

                    if (displayText === currentText) {
                        if (loop || currentIndex < texts.length - 1) {
                            setIsPaused(true);
                        }
                    }
                }
            },
            isDeleting ? deleteSpeed : speed
        );

        return () => clearTimeout(timer);
    }, [displayText, currentIndex, isDeleting, isPaused, texts, loop, speed, deleteSpeed, pauseDuration]);

    return (
        <motion.span {...rest} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
            {displayText}
            <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
                className="inline-block"
            >
                |
            </motion.span>
        </motion.span>
    );
};
