"use client";

import { useState } from 'react';
import { ArrowRight, Shield, Zap, Building } from 'lucide-react';
import GlowingBorder from "@/app/components/GlowingBorder/glowingBorder";
import PricingToggle from "@/app/components/PricingToggle/pricingToggle";
import PricingCard from "@/app/components/PricingCard/pricingCard";
import BackgroundOverlay2 from "@/app/components/BackgroundOverlay2/backgroundOverlay2";


const Pricing = () => {
    const [isAnnual, setIsAnnual] = useState(true);

    const plans = [
        {
            name: "Starter",
            icon: Shield,
            price: 29,
            description: "Perfect for individuals and small teams",
            features: [
                "Up to 10 team members",
                "Zero Trust Network Access",
                "Basic threat protection",
                "24/7 email support",
                "2 edge locations",
                "99.9% uptime SLA"
            ]
        },
        {
            name: "Professional",
            icon: Zap,
            price: 99,
            description: "Ideal for growing businesses",
            features: [
                "Up to 50 team members",
                "Advanced security features",
                "Priority threat response",
                "24/7 priority support",
                "Custom edge locations",
                "99.99% uptime SLA",
                "Advanced analytics",
                "Custom integrations"
            ]
        },
        {
            name: "Enterprise",
            icon: Building,
            price: 299,
            description: "For large organizations",
            features: [
                "Unlimited team members",
                "Custom security policies",
                "Dedicated threat hunting",
                "24/7 dedicated support",
                "Global edge network",
                "99.999% uptime SLA",
                "Advanced compliance tools",
                "Custom deployment options",
                "Dedicated account manager"
            ]
        }
    ];

    return (
        <section id="pricing" className="relative w-full min-h-screen bg-black/10 text-white overflow-hidden">
            <BackgroundOverlay2/>
            <div className="absolute inset-0">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-400/10 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
            </div>

            <div className="max-w-7xl mx-auto relative py-20 px-4">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <h2 className="text-4xl md:text-5xl font-medium mb-6">
                        Simple,
                        <span className="bg-gradient-to-r from-green-400 to-green-700 text-transparent bg-clip-text">
                            Transparent
                        </span> Pricing
                    </h2>
                    <p className="text-gray-400 text-lg">
                        Choose the perfect plan for your security needs. All plans include our core security features.
                    </p>
                </div>
                <PricingToggle isAnnual={isAnnual} setIsAnnual={setIsAnnual} />
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {plans.map((plan, index) => (
                        <PricingCard
                            key={index}
                            plan={plan}
                            isPopular={index === 1}
                            isAnnual={isAnnual}
                        />
                    ))}
                </div>
                <div className="mt-16 relative group">
                    <GlowingBorder />
                    <div className="relative backdrop-blur-md bg-white/[0.02] border border-white/[0.05]
                                    rounded-3xl p-8 text-center group-hover:border-white/[0.1] transition-all duration-500">
                        <h3 className="text-xl font-medium mb-4">Need a Custom Solution?</h3>
                        <p className="text-gray-400 mb-6">
                            Contact our team for a personalized security solution tailored to your organization&apos;s needs.
                        </p>
                        <button className="bg-white/[0.05] text-white px-6 py-3 rounded-full font-medium
                                            hover:bg-white/[0.1] transition-colors inline-flex items-center gap-2">
                            Contact Sales
                            <ArrowRight className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pricing;