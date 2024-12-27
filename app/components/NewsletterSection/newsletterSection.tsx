import GlowingBorder from "@/app/components/GlowingBorder/glowingBorder";
import {ArrowRight} from "lucide-react";

const NewsletterSection = () => {
    return (
        <div className="py-16 border-b border-white/10">
            <div className="relative group max-w-3xl mx-auto">
                <GlowingBorder />
                <div className="relative backdrop-blur-md bg-white/[0.02] border border-white/[0.05]
                                rounded-3xl p-8 text-center group-hover:border-white/[0.1] transition-all duration-500">
                    <h3 className="text-2xl font-medium mb-4">
                        Stay Updated with NetGuard
                    </h3>
                    <p className="text-gray-400 mb-6">
                        Get the latest updates on security features and product releases.
                    </p>
                    <div className="flex flex-col md:flex-row gap-4 max-w-md mx-auto">
                        <div className="flex-grow relative group">
                            <GlowingBorder/>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full px-4 py-3 rounded-full bg-white/[0.02] border border-white/[0.05]
                                          focus:border-white/[0.1] transition-all duration-300 outline-none text-white
                                          placeholder-gray-500 relative z-10"
                            />
                        </div>
                        <button className="flex justify-center px-6 py-3 rounded-full bg-gradient-to-r from-green-400 to-green-500
                                             text-black font-medium hover:opacity-90 transition-opacity flex items-center gap-2">
                            Subscribe
                            <ArrowRight className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsletterSection;