"use client";

import { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import BackgroundOverlay2 from "@/app/components/BackgroundOverlay2/backgroundOverlay2";
import TestimonialCard from "@/app/components/TestimonialCard/testimonialCard";

const Testimonials = () => {
    const testimonials = [
        {
            author: "Sarah Chen",
            position: "CTO at TechFlow",
            content: "NetGuard transformed our security infrastructure. The zero-trust implementation was seamless, and the performance improvements were immediate. Our team particularly loves the intuitive interface.",
            rating: 5,
            avatar: "/api/placeholder/150/150"
        },
        {
            author: "Michael Rodriguez",
            position: "Security Lead at DataCore",
            content: "After evaluating multiple solutions, NetGuard stood out for its perfect balance of security and usability. The support team is exceptional, and the platform keeps getting better with each update.",
            rating: 5,
            avatar: "/api/placeholder/150/150"
        },
        {
            author: "Emily Thompson",
            position: "DevOps Manager at CloudScale",
            content: "The ease of deployment was a game-changer for us. We were able to roll out NetGuard to our entire organization in days, not weeks. The automated threat response has already prevented several potential incidents.",
            rating: 5,
            avatar: "/api/placeholder/150/150"
        },
        {
            author: "David Kim",
            position: "CEO at SecureStart",
            content: "As a startup, we needed enterprise-grade security without the enterprise complexity. NetGuard delivered exactly that. Their pricing model is fair, and the value we get is exceptional.",
            rating: 5,
            avatar: "/api/placeholder/150/150"
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    useEffect(() => {
        if (!isAutoPlaying) return;

        const interval = setInterval(() => {
            setCurrentIndex((current) => (current + 1) % testimonials.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [isAutoPlaying, testimonials.length]);

    const navigate = (direction: 'next' | 'prev') => {
        setIsAutoPlaying(false);
        setCurrentIndex((current) => {
            if (direction === 'next') {
                return (current + 1) % testimonials.length;
            }
            return current === 0 ? testimonials.length - 1 : current - 1;
        });
    };

    return (
        <section id="testimonials" className="relative w-full min-h-screen bg-black/10 text-white overflow-hidden">
            <BackgroundOverlay2/>
            <div className="absolute inset-0">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-400/10 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
            </div>
            <div className="max-w-7xl mx-auto relative py-20 px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl md:text-5xl font-medium mb-6">
                        Trusted by
                        <span className="bg-gradient-to-r from-green-400 to-green-700 text-transparent bg-clip-text ml-2">
                            Industry Leaders
                        </span>
                    </h2>
                    <p className="text-gray-400 text-lg">
                        See what our clients say about their experience with NetGuard&quot;s security solutions.
                    </p>
                </div>
                <div className="relative max-w-4xl mx-auto">
                    <div className="mb-12">
                        <TestimonialCard
                            testimonial={testimonials[currentIndex]}
                            isActive={true}
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex gap-4">
                            <button
                                onClick={() => navigate('prev')}
                                className="p-3 rounded-full backdrop-blur-md bg-white/[0.02] border border-white/[0.05]
                                            hover:bg-white/[0.05] transition-all duration-300"
                            >
                                <ArrowLeft className="w-5 h-5 text-green-400" />
                            </button>
                            <button
                                onClick={() => navigate('next')}
                                className="p-3 rounded-full backdrop-blur-md bg-white/[0.02] border border-white/[0.05]
                                            hover:bg-white/[0.05] transition-all duration-300"
                            >
                                <ArrowRight className="w-5 h-5 text-green-400" />
                            </button>
                        </div>
                        <div className="flex gap-2">
                            {testimonials.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => {
                                        setCurrentIndex(index);
                                        setIsAutoPlaying(false);
                                    }}
                                    className={`w-2 h-2 rounded-full transition-all duration-300 
                                        ${index === currentIndex
                                        ? 'w-8 bg-green-400'
                                        : 'bg-white/20 hover:bg-white/40'}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
                <div className="mt-20 text-center">
                    <p className="text-sm text-gray-400 mb-6">Trusted by leading companies worldwide</p>
                    <div className="flex flex-wrap justify-center gap-8 opacity-50">
                        {[...Array(5)].map((_, index) => (
                            <div key={index} className="w-32 h-12 rounded-lg bg-white/[0.02] backdrop-blur-md" />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;