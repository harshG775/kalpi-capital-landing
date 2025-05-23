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
                <div className="flex items-start md:justify-center">
                    <Link href="/" className="  rounded-xl overflow-hidden">
                        <Image
                            src="/kalpi-logo.jpeg"
                            alt="Kalpi Logo"
                            width={80}
                            height={80}
                            className="h-12 w-auto object-contain"
                        />
                    </Link>
                </div>

                <div className="flex md:items-center items-start flex-1 gap-4 md:flex-row flex-col ">
                    <Link
                        href="/"
                        className="text-secondary-foreground hover:text-foreground/60 transition-colors font-semibold"
                    >
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
