"use client";
import Navbar from "./_components/Navbar";
import Footer from "./_components/Footer";
import HeroSection from "./_components/HeroSection";
import CTASection from "./_components/CTASection";
import IntegrationsSection from "./_components/IntegrationsSection";
import FeatureHubSection from "./_components/Feature-Hub-Section";
import FeatureStatsSection from "./_components/Feature-Stats-Section";

export default function V3page() {
    return (
        <div>
            <Navbar />
            <main>
                <HeroSection />
                <FeatureStatsSection />
                <FeatureHubSection />
                <IntegrationsSection />
                <CTASection />
            </main>
            <Footer />
        </div>
    );
}
