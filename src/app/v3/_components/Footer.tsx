import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    const footerLink = {
        logo: {
            image: "/kalpi-logo.jpeg",
            link: "/",
        },
        links: [
            {
                title: "Home",
                link: "/",
            },
            {
                title: "Pricing",
                link: "/",
            },
            {
                title: "About",
                link: "/",
            },
            {
                title: "Blog",
                link: "/",
            },
            {
                title: "Contact",
                link: "/",
            },
        ],
    };
    return (
        <footer>
            <div className="flex max-w-7xl mx-auto gap-4 py-16 px-4 flex-col flex-wrap md:flex-row md:items-center">
                <Link href={footerLink.logo.link} className="w-[80px] flex justify-start md:justify-center">
                    <Image
                        src={footerLink.logo.image}
                        alt="logo"
                        width={80}
                        height={80}
                        className="mix-blend-multiply h-12 w-auto object-contain"
                    />
                </Link>

                <div className="flex md:items-center items-start flex-1 gap-4 md:flex-row flex-col ">
                        <Link href="/" className="text-secondary-foreground hover:text-foreground/60 transition-colors font-semibold">
                            Get Started for Free
                        </Link>
                    {footerLink.links.map((link, index) => (
                        <Link
                            key={index}
                            href={link.link}
                            className="text-secondary-foreground hover:text-foreground/60 transition-colors"
                        >
                            {link.title}
                        </Link>
                    ))}

                    <Link
                        href="/"
                        className="md:ml-auto text-secondary-foreground hover:text-foreground/60 transition-colors"
                    >
                        Terms
                    </Link>
                    <Link href="/" className="text-secondary-foreground hover:text-foreground/60 transition-colors">
                        Privacy
                    </Link>
                </div>
            </div>
        </footer>
    );
}
