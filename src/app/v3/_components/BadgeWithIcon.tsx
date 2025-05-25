import { cn } from "@/lib/utils";
import { CheckIcon } from "lucide-react";

const colorClasses = {
    red: "text-red-500 bg-red-500/10",
    blue: "text-blue-500 bg-blue-500/10",
    green: "text-green-500 bg-green-500/10",
    purple: "text-purple-500 bg-purple-500/10",
    orange: "text-orange-500 bg-orange-500/10",
    yellow: "text-yellow-500 bg-yellow-500/10",
    pink: "text-pink-500 bg-pink-500/10",
    indigo: "text-indigo-500 bg-indigo-500/10",
    teal: "text-teal-500 bg-teal-500/10",
    primary: "text-primary bg-primary/10",
} as const;

export const BadgeWithIcon = ({
    texts,
    className,
    iconColor,
}: {
    texts: string[];
    className?: string;
    iconColor?: keyof typeof colorClasses;
}) => {
    const colorClass = iconColor ? colorClasses[iconColor] : colorClasses.primary;

    return (
        <div className={`flex flex-col md:flex-row gap-6 md:gap-8 ${className}`}>
            {texts?.map((text, index) => (
                <div key={index} className="flex items-center gap-2 text-secondary-foreground/80 font-lexend">
                    <CheckIcon className={cn("size-6 p-1 rounded-full", colorClass)} />
                    <span>{text}</span>
                </div>
            ))}
        </div>
    );
};
