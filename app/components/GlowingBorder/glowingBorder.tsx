"use client";

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface GlowingBorderProps {
    opacity?: string;
}

const GlowingBorder = ({ opacity = "0.6" }: GlowingBorderProps) => {
    const borderRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const element = borderRef.current;
        if (!element) return;

        gsap.set(element, { opacity: 0 });

        const enterAnimation = () => {
            gsap.to(element, {
                opacity: opacity,
                duration: 0.5,
                ease: "power2.out"
            });
        };

        const leaveAnimation = () => {
            gsap.to(element, {
                opacity: 0,
                duration: 0.5,
                ease: "power2.out"
            });
        };

        const parent = element.parentElement;
        if (!parent) return;

        parent.addEventListener('mouseenter', enterAnimation);
        parent.addEventListener('mouseleave', leaveAnimation);

        return () => {
            parent.removeEventListener('mouseenter', enterAnimation);
            parent.removeEventListener('mouseleave', leaveAnimation);
        };
    }, [opacity]);

    return (
        <div
            ref={borderRef}
            className="absolute inset-0 rounded-3xl bg-gradient-to-r from-green-400/5 via-green-500/5 to-green-600/5 blur-xl -z-10"
        />
    );
};

export default GlowingBorder;