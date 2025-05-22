import { useMobile } from "@/hooks/use-mobile";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export const CustomCursor = () => {
    const cursorRef = useRef<HTMLDivElement>(null);
    const [cursorVisible, setCursorVisible] = useState(false);
    const [cursorEnlarged, setCursorEnlarged] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const isMobile = useMobile();

    useEffect(() => {
        if (isMobile) return;

        const onMouseMove = (e: MouseEvent) => {
            const { pageX: x, pageY: y } = e;
            setMousePosition({ x, y });
        };

        const onMouseEnter = () => {
            setCursorVisible(true);
        };

        const onMouseLeave = () => {
            setCursorVisible(false);
        };

        const onMouseDown = () => {
            setCursorEnlarged(true);
        };

        const onMouseUp = () => {
            setCursorEnlarged(false);
        };

        document.addEventListener("mousedown", onMouseDown);
        document.addEventListener("mouseup", onMouseUp);
        document.addEventListener("mousemove", onMouseMove);
        document.addEventListener("mouseenter", onMouseEnter);
        document.addEventListener("mouseleave", onMouseLeave);

        // Add cursor effects for interactive elements
        const interactiveElements = document.querySelectorAll("button, a, input, .interactive");
        interactiveElements.forEach((el) => {
            el.addEventListener("mouseenter", () => setCursorEnlarged(true));
            el.addEventListener("mouseleave", () => setCursorEnlarged(false));
        });

        return () => {
            document.removeEventListener("mousedown", onMouseDown);
            document.removeEventListener("mouseup", onMouseUp);
            document.removeEventListener("mousemove", onMouseMove);
            document.removeEventListener("mouseenter", onMouseEnter);
            document.removeEventListener("mouseleave", onMouseLeave);

            interactiveElements.forEach((el) => {
                el.removeEventListener("mouseenter", () => setCursorEnlarged(true));
                el.removeEventListener("mouseleave", () => setCursorEnlarged(false));
            });
        };
    }, [isMobile]);

    if (isMobile) return null;

    return (
        <motion.div
            ref={cursorRef}
            className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-50 mix-blend-difference"
            style={{
                backgroundColor: "white",
                x: mousePosition.x - 16,
                y: mousePosition.y - 16,
                opacity: cursorVisible ? 1 : 0,
                scale: cursorEnlarged ? 1.5 : 1,
            }}
            animate={{
                scale: cursorEnlarged ? 1.5 : 1,
            }}
            transition={{
                type: "spring",
                stiffness: 500,
                damping: 28,
            }}
        />
    );
};
