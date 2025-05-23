import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { StarsIcon } from "lucide-react";

export default function IntegrationsSection() {
    return (
        <section
            id="integrations"
            className="py-16 md:py-24 bg-gradient-to-b from-primary/10 via-primary/10  to-background/20"
        >
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <Button variant="outline" className="mb-6 h-6 hover:bg-background border-primary">
                        Effortless Integrations
                    </Button>
                    <h2 className="text-4xl md:text-6xl font-bold mb-6">
                        We make your <span className="text-primary">sales stack</span> work harder & smarter
                    </h2>
                    <p className="text-xl text-muted-foreground font-semibold">
                        Kalpi integrates with your favorite data providers and tools to create a seamless workflow.
                    </p>
                </motion.div>
            </div>
            <Sliders />
        </section>
    );
}

const integrations = [
    { name: "HubSpot", tag: "CRM Tools", url: "https://framerusercontent.com/images/X6sliJibuMynlXS4uDbyYx9Yp4.svg" },
    {
        name: "Google Meet",
        tag: "Online Meetings",
        url: "https://framerusercontent.com/images/Uio3G6N0OnBZufAx8DVmNTfa3c0.svg",
    },
    {
        name: "Microsoft Teams",
        tag: "Collaboration",
        url: "https://framerusercontent.com/images/nbN1Vmt8ZhpZvenBWrzddRv94.svg",
    },
    {
        name: "Zoom",
        tag: "Video Conferencing",
        url: "https://framerusercontent.com/images/X8U3VCEcaSU2njrAH0AaKKwasI.png",
    },
    {
        name: "Salesforce",
        tag: "Sales Platform",
        url: "https://framerusercontent.com/images/R5e8ZzWXF0IeMUi6txDntg8w4.svg",
    },
    { name: "Slack", tag: "Team Chat", url: "https://framerusercontent.com/images/fnKMbeutgNMn9Ba6drs9YmkSMg.svg" },
    {
        name: "Google Calendar",
        tag: "Scheduling",
        url: "https://framerusercontent.com/images/c1XvlVwfrycNmo9a1fY4c09bcwU.svg",
    },
    { name: "Cisco Webex", tag: "Webinars", url: "https://framerusercontent.com/images/BVWoh2n11Gl7Orq9EgrNoqMU.svg" },
    { name: "Gmail", tag: "Email", url: "https://framerusercontent.com/images/JnZujd0mjZwZAnYtYE6MsrKzUH8.svg" },
];

function Sliders() {
    return (
        <div className="flex flex-row justify-center gap-20">
            <div
                className="slider"
                data-reverse="true"
                style={
                    {
                        "--width": "140px",
                        "--height": "140px",
                        "--quantity": "4",
                        "--duration": "20s",
                    } as React.CSSProperties
                }
            >
                <div className="list">
                    {integrations.map((image, index) => (
                        <div
                            key={index}
                            className="item"
                            style={{ "--position": `${index + 1}` } as React.CSSProperties}
                        >
                            <SliderItem name={image.name} tag={image.tag} image={image.url} />
                        </div>
                    ))}
                </div>
            </div>
            <div
                className="slider"
                style={
                    {
                        "--width": "140px",
                        "--height": "140px",
                        "--quantity": "4",
                        "--duration": "20s",
                    } as React.CSSProperties
                }
            >
                <div className="list">
                    {integrations.map((image, index) => (
                        <div
                            key={index}
                            className="item"
                            style={{ "--position": `${index + 1}` } as React.CSSProperties}
                        >
                            <SliderItem name={image.name} tag={image.tag} image={image.url} />
                        </div>
                    ))}
                </div>
            </div>
            <div
                className="slider hidden md:block"
                data-reverse="true"
                style={
                    {
                        "--width": "140px",
                        "--height": "140px",
                        "--quantity": "4",
                        "--duration": "20s",
                    } as React.CSSProperties
                }
            >
                <div className="list">
                    {integrations.map((image, index) => (
                        <div
                            key={index}
                            className="item"
                            style={{ "--position": `${index + 1}` } as React.CSSProperties}
                        >
                            <SliderItem name={image.name} tag={image.tag} image={image.url} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
const SliderItem = ({ name, tag, image }: { name: string; tag: string; image: string }) => (
    <div className="w-full h-full rounded-2xl bg-background flex flex-col justify-between p-4 shadow-sm">
        {/* Image Container */}
        <div className="rounded-2xl w-full h-1/2 flex items-center">
            <img src={image} alt={name} className="w-10 h-10 object-contain" />
        </div>

        {/* Text + Tag */}
        <div className="flex flex-col gap-2">
            <p className="text-sm font-medium">{name}</p>
            <div>
                <div className="bg-blue-50 text-blue-500 text-xs font-medium px-3 py-1 rounded-full text-center">
                    {tag}
                </div>
            </div>
        </div>
    </div>
);
