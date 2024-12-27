import { Shield, Heart, ArrowRight, CheckCircle, Target } from 'lucide-react';
import GlowingBorder    from "@/app/components/GlowingBorder/glowingBorder";
import BackgroundOverlay2 from "@/app/components/BackgroundOverlay2/backgroundOverlay2";

const Mission = () => {
    return (
        <section id="mission" className="relative w-full min-h-screen bg-black/10 text-white overflow-hidden">
            <BackgroundOverlay2 />
            <div className="absolute inset-0">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-400/10 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
            </div>
            <div className="max-w-7xl mx-auto relative py-20 px-4">
                <div className="grid lg:grid-cols-2 gap-12">
                    <div className="relative">
                        <div className="sticky top-20">
                            <h2 className="text-5xl lg:text-6xl font-medium leading-tight mb-8">
                                Securing the
                                <span className="block mt-2 bg-gradient-to-r from-green-400 to-green-700 text-transparent bg-clip-text">
                                    Digital Future
                                </span>
                            </h2>
                            <div className="relative group p-6 backdrop-blur-md bg-white/[0.02] border border-white/[0.05]
                                            rounded-3xl mb-8 hover:border-white/[0.1] transition-all duration-500">
                                <GlowingBorder />
                                <p className="text-xl text-gray-300 leading-relaxed">
                                    At NetGuard, we&apos;re reimagining internet security for everyone.
                                    Our mission is to democratize cybersecurity through innovation and accessibility.
                                </p>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                {[
                                    { value: '10M+', label: 'Users Protected' },
                                    { value: '200+', label: 'Countries' },
                                ].map((stat, index) => (
                                    <div key={index} className="bg-white/[0.02] rounded-2xl p-4 text-center">
                                        <div className="text-3xl font-bold text-green-400">{stat.value}</div>
                                        <div className="text-sm text-gray-400">{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="space-y-8">
                        {[
                            {
                                icon: Shield,
                                title: "Security for All",
                                description: "Enterprise-grade protection made accessible to everyone.",
                                color: "from-green-400/20",
                                highlights: ["Zero Trust Architecture", "End-to-end Encryption", "Threat Intelligence"]
                            },
                            {
                                icon: Heart,
                                title: "Human-Centric Design",
                                description: "Complex security made simple through intuitive design.",
                                color: "from-green-500/20",
                                highlights: ["User-Friendly Interface", "Simple Setup", "24/7 Support"]
                            },
                            {
                                icon: Target,
                                title: "Innovation First",
                                description: "Pushing the boundaries of what's possible in cybersecurity.",
                                color: "from-green-600/20",
                                highlights: ["AI-Powered Protection", "Predictive Analysis", "Automated Response"]
                            }
                        ].map((value, index) => (
                            <div key={index} className="group relative">
                                <div className={`absolute inset-0 bg-gradient-to-r ${value.color} to-transparent 
                                                rounded-3xl blur-xl opacity-40 group-hover:opacity-60 transition-opacity duration-500`} />

                                <div className="relative backdrop-blur-md bg-white/[0.02] border border-white/[0.05]
                                                rounded-3xl p-8 group-hover:border-white/[0.1] transition-all duration-500">
                                    <div className="flex items-start gap-6">
                                        <div className="bg-white/[0.05] p-3 rounded-2xl">
                                            <value.icon className="w-8 h-8 text-green-400" />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-2xl font-medium text-white mb-3">{value.title}</h3>
                                            <p className="text-gray-400 mb-6">{value.description}</p>

                                            <div className="space-y-2">
                                                {value.highlights.map((highlight, idx) => (
                                                    <div key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                                                        <CheckCircle className="w-4 h-4 text-green-400" />
                                                        {highlight}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                        <div className="relative group">
                            <GlowingBorder />
                            <div className="relative backdrop-blur-md bg-white/[0.02] border border-white/[0.05]
                                            rounded-3xl p-8 group-hover:border-white/[0.1] transition-all duration-500">
                                <h3 className="text-2xl font-medium mb-4">Join Our Mission</h3>
                                <p className="text-gray-400 mb-6">
                                    Be part of the revolution in cybersecurity. Together, we can build a safer digital world.
                                </p>
                                <button className="flex items-center gap-2 bg-gradient-to-r from-green-400 to-green-500
                                                    text-black px-6 py-3 rounded-full font-medium hover:opacity-90 transition-opacity">
                                    Get Started
                                    <ArrowRight className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Mission;