"use client";
import Navbar from "./_components/Navbar";
import Footer from "./_components/Footer";
import HeroSection from "./_components/HeroSection";
import CTASection from "./_components/CTASection";

export default function V3page() {
    return (
        <div>
            <Navbar />
            <main>
                <HeroSection />
                <CTASection />
            </main>
            <Footer />
        </div>
    );
}
