"use client";

import { Shield, Globe, Lock, Cloud, Users, Terminal } from 'lucide-react';
import BackgroundOverlay2 from "@/app/components/BackgroundOverlay2/backgroundOverlay2";
import FeatureCard from "@/app/components/FeatureCard/featureCard";
import StatsOverview from "@/app/components/StatsOverview/statsOverview";

export default function Features() {
    return (
        <section id="features" className="relative w-full min-h-screen bg-black/60 text-white overflow-hidden">
            <BackgroundOverlay2 />
            <div className="max-w-7xl mx-auto py-20 px-4">
                <div className="text-center mb-16 relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 via-green-500/20 to-green-600/20 blur-3xl opacity-30" />
                    <h2 className="relative text-4xl md:text-5xl font-medium mb-6">
                        The Future of
                        <span className="bg-gradient-to-r from-green-400 to-green-700 text-transparent bg-clip-text"> Network Security</span>
                    </h2>
                    <p className="relative text-gray-400 max-w-2xl mx-auto text-lg">
                        Experience enterprise-grade security with consumer-friendly design.
                        NetGuard redefines what&apos;s possible in network protection.
                    </p>
                </div>
                <StatsOverview />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2">
                        <FeatureCard
                            icon={Shield}
                            title="Zero Trust Security Model"
                            description="Implement the principle of 'never trust, always verify' with our advanced Zero Trust architecture. Every access request is thoroughly verified, regardless of its origin."
                            metrics={[
                                { label: "Threat Detection", value: "99.9%" },
                                { label: "Response Time", value: "<1ms" },
                                { label: "Security Score", value: "A+" },
                                { label: "Compliance", value: "100%" }
                            ]}

                            className="h-full"
                        />
                    </div>
                    <FeatureCard
                        icon={Globe}
                        title="Global Edge Network"
                        description="Access your resources from anywhere with our distributed edge network, ensuring low-latency connections and high availability."
                        metrics={[
                            { label: "Data Centers", value: "200+" },
                            { label: "Countries", value: "80+" }
                        ]}
                    />
                    <FeatureCard
                        icon={Cloud}
                        title="Cloud Integration"
                        description="Seamlessly connect with major cloud providers including AWS, Google Cloud, and Azure."
                        metrics={[
                            { label: "Cloud Platforms", value: "15+" },
                            { label: "Setup Time", value: "5min" }
                        ]}
                    />
                    <div className="lg:col-span-2">
                        <FeatureCard
                            icon={Terminal}
                            title="Developer-First Platform"
                            description="Built for developers, by developers. Comprehensive API access, detailed documentation, and powerful CLI tools make integration a breeze."
                            metrics={[
                                { label: "API Endpoints", value: "100+" },
                                { label: "Response Time", value: "50ms" },
                                { label: "Success Rate", value: "99.9%" },
                                { label: "Integration", value: "<1h" }
                            ]}
                            className="h-full"
                        />
                    </div>
                    <FeatureCard
                        icon={Lock}
                        title="Advanced Encryption"
                        description="State-of-the-art encryption protocols protect your data at rest and in transit."
                        metrics={[
                            { label: "Encryption", value: "256bit" },
                            { label: "Protocols", value: "Latest" }
                        ]}
                    />
                    <FeatureCard
                        icon={Users}
                        title="Team Collaboration"
                        description="Powerful tools for team management and collaboration."
                        metrics={[
                            { label: "Team Size", value: "∞" },
                            { label: "Roles", value: "20+" }
                        ]}
                    />
                </div>
                <div className="mt-16 text-center">
                    <button className="bg-gradient-to-r from-green-400 to-green-500 text-black px-8 py-4 rounded-full
                                       font-medium hover:opacity-90 transition-opacity text-lg shadow-lg shadow-green-400/20">
                        Start Securing Your Network
                    </button>
                </div>
            </div>
        </section>
    );
};