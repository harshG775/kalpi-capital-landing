import { useMobile } from "@/hooks/use-mobile";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
export const MagneticButton = ({ children, className }: { children: React.ReactNode; className?: string }) => {
    const buttonRef = useRef<HTMLButtonElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const isMobile = useMobile();

    const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (isMobile || !buttonRef.current) return;

        const { clientX, clientY } = e;
        const { left, top, width, height } = buttonRef.current.getBoundingClientRect();

        const x = (clientX - (left + width / 2)) * 0.3;
        const y = (clientY - (top + height / 2)) * 0.3;

        setPosition({ x, y });
    };

    const handleMouseLeave = () => {
        setPosition({ x: 0, y: 0 });
    };

    return (
        <motion.button
            ref={buttonRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            animate={{ x: position.x, y: position.y }}
            transition={{ type: "spring", stiffness: 150, damping: 15 }}
            className={className}
        >
            {children}
        </motion.button>
    );
};
