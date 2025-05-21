import Link from "next/link";
import React from "react";
import { Button } from "./button";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="bg-white dark:bg-neutral-950 border-t border-neutral-200/50 dark:border-neutral-800/50 py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="md:col-span-1">
                        <Image
                            src="/kalpi-logo.jpeg"
                            alt="Kalpi Capital Logo"
                            width={150}
                            height={50}
                            className="h-10 w-auto mb-4"
                        />
                        <p className="text-sm text-muted-foreground dark:text-neutral-400 mb-4">
                            Empowering portfolio managers with advanced quantitative research solutions. Build,
                            backtest, and deploy your strategies with confidence.
                        </p>
                        <div className="flex gap-4">
                            <Link href="#" className="text-neutral-500 hover:text-[#4CAF50] transition-colors">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                                </svg>
                            </Link>
                            <Link href="#" className="text-neutral-500 hover:text-[#4CAF50] transition-colors">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                                    <rect x="2" y="9" width="4" height="12"></rect>
                                    <circle cx="4" cy="4" r="2"></circle>
                                </svg>
                            </Link>
                            <Link href="#" className="text-neutral-500 hover:text-[#4CAF50] transition-colors">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                                </svg>
                            </Link>
                        </div>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link
                                    href="#"
                                    className="text-sm text-muted-foreground dark:text-neutral-400 hover:text-[#4CAF50] transition-colors"
                                >
                                    Strategy Builder
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    className="text-sm text-muted-foreground dark:text-neutral-400 hover:text-[#4CAF50] transition-colors"
                                >
                                    Backtest
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    className="text-sm text-muted-foreground dark:text-neutral-400 hover:text-[#4CAF50] transition-colors"
                                >
                                    My Strategies
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    className="text-sm text-muted-foreground dark:text-neutral-400 hover:text-[#4CAF50] transition-colors"
                                >
                                    Marketplace
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4">Contact Us</h3>
                        <ul className="space-y-2">
                            <li className="flex items-center gap-2 text-sm text-muted-foreground dark:text-neutral-400">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                                </svg>
                                +91-8871911901
                            </li>
                            <li className="flex items-center gap-2 text-sm text-muted-foreground dark:text-neutral-400">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                    <polyline points="22,6 12,13 2,6"></polyline>
                                </svg>
                                info@kalpicapital.com
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4">Newsletter</h3>
                        <p className="text-sm text-muted-foreground dark:text-neutral-400 mb-4">
                            Subscribe to our newsletter for the latest updates on market trends and quantitative
                            research.
                        </p>
                        <div className="flex gap-2">
                            <input
                                type="email"
                                placeholder="Your email address"
                                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            />
                            <Button className="bg-gradient-to-r from-[#4CAF50] to-[#8BC34A] hover:from-[#3d8b40] hover:to-[#7CB342] text-white">
                                Subscribe
                            </Button>
                        </div>
                    </div>
                </div>

                <div className="border-t border-neutral-200/50 dark:border-neutral-800/50 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-xs text-muted-foreground dark:text-neutral-400">
                        © 2025 Kalpi Capital. All rights reserved.
                    </p>
                    <div className="flex gap-4 mt-4 md:mt-0">
                        <Link
                            href="#"
                            className="text-xs text-muted-foreground dark:text-neutral-400 hover:text-[#4CAF50] transition-colors"
                        >
                            Terms of Service
                        </Link>
                        <Link
                            href="#"
                            className="text-xs text-muted-foreground dark:text-neutral-400 hover:text-[#4CAF50] transition-colors"
                        >
                            Privacy Policy
                        </Link>
                        <Link
                            href="#"
                            className="text-xs text-muted-foreground dark:text-neutral-400 hover:text-[#4CAF50] transition-colors"
                        >
                            Disclaimer
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
