import React from 'react';
import HeroOverlay from "@/app/components/HeroOverlay/heroOverlay";
import BackgroundOverlay from "@/app/components/BackgroundOverlay/backgroundOverlay";

export default function Hero() {
    return (
        <section id="hero" className="relative min-h-screen w-screen text-white">
            <BackgroundOverlay/>
            <HeroOverlay/>
            <div className="w-full h-full p-3">
                <div className="flex flex-col items-center justify-center  rounded-[2rem] border border-green-900/20 z-30">
                    <div className="max-w-6xl mx-auto text-center space-y-4 md:space-y-6 mb-8 md:mb-12">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium leading-tight mt-32">
                            Security you can rely on.
                            <br className="hidden md:block" />
                            The VPN you can trust.
                        </h1>
                        <p className="text-gray-400 text-sm md:text-base max-w-xl mx-auto px-4 md:px-0">
                            NetGuard makes Zero Trust Network Access easy to deploy, even easier to use, and always secure.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center pt-4">
                            <button className="bg-green-400 text-black px-4 md:px-6 py-2.5 md:py-3 rounded-full font-medium hover:bg-green-300 transition-colors text-sm md:text-base">
                                Get Started
                            </button>
                            <button className="text-white px-4 md:px-6 py-2.5 md:py-3 rounded-full font-medium backdrop-blur-md bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.05] transition-colors text-sm md:text-base">
                                Join Wait List
                            </button>
                        </div>
                    </div>
                    <div className="relative w-full mx-auto mt-8 md:mt-0 md:max-w-2xl">
                        <img
                            src="/mockup.png"
                            alt="VPN App Interface"
                            className="relative w-full"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}