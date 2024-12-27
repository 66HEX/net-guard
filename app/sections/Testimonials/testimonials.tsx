"use client";

import { useState, useEffect, useRef } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import BackgroundOverlay2 from "@/app/components/BackgroundOverlay2/backgroundOverlay2";
import TestimonialCard from "@/app/components/TestimonialCard/testimonialCard";

const Testimonials = () => {
    const testimonials = [
        {
            author: "Sarah Chen",
            position: "CTO at TechFlow",
            content: "NetGuard transformed our security infrastructure. The zero-trust implementation was seamless, and the performance improvements were immediate. Our team particularly loves the intuitive interface.",
            rating: 5,
            avatar: "/profile-photos/woman-1.jpg"
        },
        {
            author: "Michael Rodriguez",
            position: "Security Lead at DataCore",
            content: "After evaluating multiple solutions, NetGuard stood out for its perfect balance of security and usability. The support team is exceptional, and the platform keeps getting better with each update.",
            rating: 5,
            avatar: "/profile-photos/man-1.jpg"
        },
        {
            author: "Emily Thompson",
            position: "DevOps Manager at CloudScale",
            content: "The ease of deployment was a game-changer for us. We were able to roll out NetGuard to our entire organization in days, not weeks. The automated threat response has already prevented several potential incidents.",
            rating: 5,
            avatar: "/profile-photos/woman-2.jpg"
        },
        {
            author: "David Kim",
            position: "CEO at SecureStart",
            content: "As a startup, we needed enterprise-grade security without the enterprise complexity. NetGuard delivered exactly that. Their pricing model is fair, and the value we get is exceptional.",
            rating: 5,
            avatar: "/profile-photos/man-2.jpg"
        }
    ];
    const companyLogos = [
        {
            name: "Tesla",
            logo: "/logos/tesla.svg",
            alt: "Tesla logo"
        },
        {
            name: "Facebook",
            logo: "/logos/facebook.svg",
            alt: "Facebook logo"
        },
        {
            name: "SpaceX",
            logo: "/logos/spacex.svg",
            alt: "SpaceX logo"
        },
        {
            name: "Spotify",
            logo: "/logos/spotify.svg",
            alt: "Spotify logo"
        },
        {
            name: "Netflix",
            logo: "/logos/netflix.svg",
            alt: "Netflix logo"
        }
    ];


    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const [isAnimating, setIsAnimating] = useState(false);
    const cardRef = useRef(null);

    useEffect(() => {
        if (!isAutoPlaying) return;

        const interval = setInterval(() => {
            handleNavigate('next');
        }, 5000);

        return () => clearInterval(interval);
    }, [isAutoPlaying]);

    const animateCard = (direction: 'next' | 'prev') => {
        if (isAnimating) return;
        setIsAnimating(true);

        gsap.to(cardRef.current, {
            opacity: 0,
            duration: 0.3,
            ease: "power2.inOut",
            onComplete: () => {
                setCurrentIndex((current) => {
                    if (direction === 'next') {
                        return (current + 1) % testimonials.length;
                    }
                    return current === 0 ? testimonials.length - 1 : current - 1;
                });

                gsap.to(cardRef.current, {
                    opacity: 1,
                    duration: 0.3,
                    ease: "power2.inOut",
                    onComplete: () => setIsAnimating(false)
                });
            }
        });
    };

    const handleNavigate = (direction: 'next' | 'prev') => {
        setIsAutoPlaying(false);
        animateCard(direction);
    };

    const handleDotClick = (index: number) => {
        if (isAnimating || index === currentIndex) return;
        setIsAutoPlaying(false);

        const direction = index > currentIndex ? 'next' : 'prev';
        animateCard(direction);
    };

    return (
        <section id="testimonials" className="relative w-full  bg-black/60 text-white overflow-hidden">
            <BackgroundOverlay2/>
            <div className="max-w-7xl mx-auto relative py-20 px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl md:text-5xl font-medium mb-6">
                        Trusted by
                        <span className="bg-gradient-to-r from-green-400 to-green-700 text-transparent bg-clip-text ml-2">
                            Industry Leaders
                        </span>
                    </h2>
                    <p className="text-gray-400 text-lg">
                        See what our clients say about NetGuard&apos;s security solutions.
                    </p>
                </div>
                <div className="relative max-w-4xl mx-auto">
                    <div className="mb-12" ref={cardRef}>
                        <TestimonialCard
                            testimonial={testimonials[currentIndex]}
                            isActive={true}
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex gap-4">
                            <button
                                onClick={() => handleNavigate('prev')}
                                className="p-3 rounded-full backdrop-blur-md bg-white/[0.02] border border-white/[0.05]
                                            hover:bg-white/[0.05] transition-all duration-300"
                                disabled={isAnimating}
                            >
                                <ArrowLeft className="w-5 h-5 text-green-400" />
                            </button>
                            <button
                                onClick={() => handleNavigate('next')}
                                className="p-3 rounded-full backdrop-blur-md bg-white/[0.02] border border-white/[0.05]
                                            hover:bg-white/[0.05] transition-all duration-300"
                                disabled={isAnimating}
                            >
                                <ArrowRight className="w-5 h-5 text-green-400" />
                            </button>
                        </div>
                        <div className="flex gap-2">
                            {testimonials.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => handleDotClick(index)}
                                    disabled={isAnimating}
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
                        {companyLogos.map((company, index) => (
                            <div key={index} className="w-32 h-12 rounded-lg bg-white/[0.02] backdrop-blur-md p-2 flex items-center justify-center">
                                <img
                                    src={company.logo}
                                    alt={company.alt}
                                    className="w-full h-full object-contain filter invert brightness-0"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;