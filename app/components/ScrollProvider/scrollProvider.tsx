"use client";

import { ReactLenis, useLenis } from "lenis/react";
import { ReactNode } from "react";

interface SmoothScrollingProps {
    children: ReactNode;
}

function SmoothScrolling({ children }: SmoothScrollingProps) {
    useLenis();
    return (
        <ReactLenis root options={{ lerp: 0.07, duration: 1.5 }}>
            {children}
        </ReactLenis>
    );
}

export default SmoothScrolling;