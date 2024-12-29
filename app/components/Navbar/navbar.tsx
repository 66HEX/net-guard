"use client";

import { useState, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import { useLenis } from 'lenis/react';
import gsap from 'gsap';
import {useGSAP} from "@gsap/react";

export default function Navbar() {
    const lenis = useLenis();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef(null);
    const refs = {
        features: useRef(null),
        mission: useRef(null),
        pricing: useRef(null),
        faq: useRef(null),
        testimonials: useRef(null),
        getStarted: useRef(null)
    };
    const menuItems = [
        { href: "#features", label: "Features", ref: refs.features },
        { href: "#mission", label: "Mission", ref: refs.mission },
        { href: "#pricing", label: "Pricing", ref: refs.pricing },
        { href: "#faq", label: "FAQ", ref: refs.faq },
        { href: "#testimonials", label: "Testimonials", ref: refs.testimonials }
    ];
    const closeMenu = () => {
        const tl = gsap.timeline();
        tl.to([
            ...menuItems.map(item => item.ref.current),
            refs.getStarted.current
        ], {
            opacity: 0,
            y: 20,
            duration: 0.3,
            stagger: 0.05,
            ease: "power2.in"
        });
        tl.to(menuRef.current, {
            opacity: 0,
            duration: 0.2,
            ease: "power2.in",
            onComplete: () => {
                setIsMenuOpen(false);
            }
        });
    };
    const toggleMenu = () => {
        if (isMenuOpen) {
            closeMenu();
        } else {
            setIsMenuOpen(true);
        }
    };
    useGSAP(() => {
        if (isMenuOpen) {
            gsap.fromTo(menuRef.current,
                {
                    opacity: 0,
                },
                {
                    opacity: 1,
                    duration: 0.3,
                    ease: "power2.out"
                }
            );
            gsap.fromTo(
                [
                    ...menuItems.map(item => item.ref.current),
                    refs.getStarted.current
                ],
                {
                    opacity: 0,
                    y: 20,
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.4,
                    stagger: 0.1,
                    ease: "power2.out"
                }
            );
        }
    }, [isMenuOpen]);

    const handleScroll = (sectionId: string): void => {
        if (isMenuOpen) {
            closeMenu();
        }

        if (sectionId) {
            lenis?.scrollTo(sectionId);
        }
    };

    return (
        <>
            <header className="fixed top-0 left-0 w-screen z-50 bg-black">
                <nav className="absolute top-6 left-6 right-6 mx-auto px-3 py-3 rounded-full backdrop-blur-md bg-white/[0.02] border border-white/[0.05]">
                    <div className="w-full mx-auto flex items-center justify-between relative">
                        <button
                            onClick={() => handleScroll('#hero')}
                            className="text-white/80 font-bold">
                            <svg viewBox="0 0 400 100" xmlns="http://www.w3.org/2000/svg" className="h-10 w-auto">
                                <defs>
                                    <style>
                                        {`@font-face {
                                            font-family: 'Lausanne';
                                            src: url('/fonts/TWKLausanne-700.woff2') format('woff2'),
                                                 url('/fonts/TWKLausanne-700.woff') format('woff');
                                        }`}
                                    </style>
                                </defs>

                                <g transform="translate(20, 20)">
                                    <circle cx="30" cy="30" r="30" fill="none" stroke="currentColor" strokeWidth="6"/>
                                    <path d="M0,30 L60,30" stroke="currentColor" strokeWidth="6"/>
                                    <path d="M30,0 Q60,30 30,60" stroke="currentColor" strokeWidth="6" fill="none"/>
                                    <path d="M30,0 Q0,30 30,60" stroke="currentColor" strokeWidth="6" fill="none"/>
                                </g>

                                <text x="100" y="65"
                                      fontFamily="Lausanne, -apple-system, sans-serif"
                                      fontWeight="700"
                                      fontSize="42px"
                                      letterSpacing="-0.5px"
                                      fill="currentColor">
                                    NetGuard
                                </text>
                            </svg>
                        </button>
                        <div className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
                            {menuItems.map((item) => (
                                <button
                                    key={item.href}
                                    onClick={() => handleScroll(item.href)}
                                    className="text-base text-white/80 hover:text-white transition-colors"
                                >
                                    {item.label}
                                </button>
                            ))}
                        </div>
                        <button
                            className="hidden md:block backdrop-blur-md bg-white/[0.02] border border-white/[0.05] text-white/80 px-6 py-3 rounded-full text-sm font-medium hover:bg-white/[0.05] transition-colors">
                            Get Started
                        </button>
                        <button
                            onClick={toggleMenu}
                            className="md:hidden text-white/80 transition-colors z-50 mr-2"
                        >
                            {isMenuOpen ? (
                                <X className="h-8 w-8"/>
                            ) : (
                                <Menu className="h-8 w-8"/>
                            )}
                        </button>
                    </div>
                </nav>
            </header>

            {isMenuOpen && (
                <div
                    ref={menuRef}
                    className="fixed inset-0 w-screen h-screen md:hidden backdrop-blur-md bg-black/40 z-40"
                >
                    <div className="flex flex-col items-center justify-center h-full gap-8">
                        {menuItems.map((item) => (
                            <button
                                key={item.href}
                                ref={item.ref}
                                className="text-lg text-white/80 hover:text-white transition-colors"
                                onClick={() => handleScroll(item.href)}
                            >
                                {item.label}
                            </button>
                        ))}
                        <button
                            ref={refs.getStarted}
                            className="backdrop-blur-md bg-white/[0.02] border border-white/[0.05] text-white/80 px-8 py-4 rounded-full text-lg font-medium hover:bg-white/[0.05] transition-colors mt-4"
                            onClick={() => closeMenu()}
                        >
                            Get Started
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}