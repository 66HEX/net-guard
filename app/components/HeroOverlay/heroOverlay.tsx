export default function HeroOverlay() {
    return (
        <div className="absolute -z-10 inset-0 w-full h-svh">
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-40 h-2/3">
                <svg
                    className="h-full w-full"
                    viewBox="0 0 100 400"
                    preserveAspectRatio="none"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="
                        M0 0
                        L80 200
                        A10 10 0 0 1 80 210
                        L0 400
                        Z"
                        fill="rgba(255,255,255,0.02)"
                        stroke="rgba(255,255,255,0.02)"
                        strokeWidth="1"
                    />
                </svg>
                <svg
                    className="absolute inset-0 h-2/3 top-1/2 -translate-y-1/2 w-3/4"
                    viewBox="0 0 100 400"
                    preserveAspectRatio="none"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="
                        M0 0
                        L80 200
                        A10 10 0 0 1 80 210
                        L0 400
                        Z"
                        fill="rgba(255,255,255,0.03)"
                        stroke="rgba(255,255,255,0.03)"
                        strokeWidth="1"
                    />
                </svg>
            </div>
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-40 h-2/3">
                <svg
                    className="h-full w-full"
                    viewBox="0 0 100 400"
                    preserveAspectRatio="none"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="
                        M100 0
                        L20 200
                        A10 10 0 0 0 20 210
                        L100 400
                        Z"
                        fill="rgba(255,255,255,0.02)"
                        stroke="rgba(255,255,255,0.02)"
                        strokeWidth="1"
                    />
                </svg>
                <svg
                    className="absolute inset-0 h-2/3 top-1/2 -translate-y-1/2 w-3/4 ml-auto"
                    viewBox="0 0 100 400"
                    preserveAspectRatio="none"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="
                        M100 0
                        L20 200
                        A10 10 0 0 0 20 210
                        L100 400
                        Z"
                        fill="rgba(255,255,255,0.03)"
                        stroke="rgba(255,255,255,0.03)"
                        strokeWidth="1"
                    />
                </svg>
            </div>
        </div>
    );
};
