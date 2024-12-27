import GlowingBorder from "@/app/components/GlowingBorder/glowingBorder";
import FeatureList from "@/app/components/FeatureList/featureList";
import {ArrowRight} from "lucide-react";

interface Plan {
    name: string;
    description: string;
    price: number;
    features: string[];
    icon: React.ElementType;
}

interface PricingCardProps {
    plan: Plan;
    isPopular: boolean;
    isAnnual: boolean;
}

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const PricingCard = ({ plan, isPopular, isAnnual }: PricingCardProps) => {
    const Icon = plan.icon;
    const monthlyPrice = plan.price;
    const annualPrice = parseFloat((plan.price * 0.8).toFixed(2));
    const priceRef = useRef(null);
    const savingsRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(priceRef.current, {
                opacity: 0,
                y: 20,
                duration: 0.5,
                ease: "power2.out"
            });

            if (isAnnual) {
                gsap.from(savingsRef.current, {
                    opacity: 0,
                    y: 10,
                    duration: 0.5,
                    delay: 0.2,
                    ease: "power2.out"
                });
            }
        });

        return () => ctx.revert();
    }, [isAnnual]);

    return (
        <div className={`relative group ${isPopular ? 'lg:-mt-8' : ''}`}>
            <GlowingBorder opacity={isPopular ? 'opacity-40' : 'opacity-0'} />

            <div className={`relative h-full backdrop-blur-md rounded-3xl p-8 transition-all duration-500
                            flex flex-col
                            ${isPopular ? 'bg-white/[0.03] border-white/[0.1]' : 'bg-white/[0.02] border-white/[0.05]'}
                            border group-hover:border-white/[0.1]`}>

                {isPopular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-green-400 to-green-700
                                    text-black text-sm font-medium px-4 py-1 rounded-full">
                        Most Popular
                    </div>
                )}
                <div className="flex items-start justify-between mb-6">
                    <div>
                        <h3 className="text-2xl font-medium text-white mb-2">{plan.name}</h3>
                        <p className="text-sm text-gray-400">{plan.description}</p>
                    </div>
                    <div className="bg-white/[0.05] p-3 rounded-2xl">
                        <Icon className="w-6 h-6 text-green-400" />
                    </div>
                </div>
                <div className="mb-6">
                    <div ref={priceRef} className="flex items-baseline gap-2">
                        <span className="text-4xl font-bold text-white">
                          ${isAnnual ? annualPrice : monthlyPrice}
                        </span>
                        <span className="text-gray-400">/mo</span>
                    </div>
                    {isAnnual && (
                        <div ref={savingsRef} className="text-sm text-green-400 mt-1">
                            Save ${((monthlyPrice - annualPrice) * 12).toFixed(2)} yearly
                        </div>
                    )}
                </div>
                <div className="flex-grow">
                    <FeatureList features={plan.features} />
                </div>
                <button className={`w-full mt-8 flex items-center justify-center gap-2 rounded-full py-3 px-6 font-medium 
                      transition-all duration-300 ${isPopular
                    ? 'bg-gradient-to-r from-green-400 to-green-500 text-black hover:opacity-90'
                    : 'bg-white/[0.05] text-white hover:bg-white/[0.1]'}`}>
                    Get Started
                    <ArrowRight className="w-4 h-4" />
                </button>
            </div>
        </div>
    );
};

export default PricingCard;