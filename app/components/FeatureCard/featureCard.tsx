"use client";

import { CheckCircle, LucideIcon } from 'lucide-react';
import GlowingBorder from "@/app/components/GlowingBorder/glowingBorder";
import FeatureMetric from "@/app/components/FeatureMetric/featureMetric";

interface Metric {
    label: string;
    value: string | number;
}

interface FeatureCardProps {
    icon: LucideIcon;
    title: string;
    description: string;
    className?: string;
    metrics?: Metric[];
    imagePath?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
                                                     icon: Icon,
                                                     title,
                                                     description,
                                                     className = '',
                                                     metrics,
                                                     imagePath
                                                 }) => {

    return (
        <div
            className={`group relative p-6 rounded-3xl backdrop-blur-md bg-gradient-to-br from-white/[0.05] to-white/[0.02] 
        border border-white/[0.05] hover:border-white/[0.1] transition-all duration-500 ${className}`}
        >
            <GlowingBorder />

            <div className="relative z-10">
                <div className="relative mb-4">
                    <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-green-500/20 blur-xl
            transform group-hover:scale-110 transition-transform duration-500" />
                    <Icon className="w-8 h-8 text-green-400 relative z-10" />
                </div>

                <h3 className="text-xl font-medium text-white mb-3 flex items-center gap-2">
                    {title}
                    <CheckCircle className="w-4 h-4 text-green-400" />
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed mb-4">{description}</p>

                {metrics && (
                    <div className="grid grid-cols-2 gap-2 mb-4">
                        {metrics.map((metric, index) => (
                            <FeatureMetric key={index} {...metric} />
                        ))}
                    </div>
                )}

                {imagePath && (
                    <div className="mt-4 rounded-xl overflow-hidden">
                        <img
                            src={imagePath}
                            alt={title}
                            className="w-full h-32 object-cover rounded-xl transform group-hover:scale-105 transition-transform duration-500"
                        />
                    </div>
                )}

                <div className="flex items-center gap-2 mt-4">
                    <span className="text-xs text-gray-400">Learn more</span>
                    <div className="h-px flex-grow bg-gradient-to-r from-green-400/50 to-transparent" />
                </div>
            </div>
        </div>
    );
};

export default FeatureCard;