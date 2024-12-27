import FooterLink from "@/app/components/FooterLink/footerLink";

const BottomBar = () => {
    return (
        <div className="py-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="w-full md:w-fit flex items-center">
                <div className="flex gap-2 items-center">
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
                </div>
                <span className="text-gray-400 ml-4">© 2024. All rights reserved.</span>
            </div>
            <div className="flex justify-between gap-4">
                <FooterLink href="#">Privacy Policy</FooterLink>
                <FooterLink href="#">Terms of Service</FooterLink>
                <FooterLink href="#">Cookie Settings</FooterLink>
            </div>
        </div>
    );
};

export default BottomBar;