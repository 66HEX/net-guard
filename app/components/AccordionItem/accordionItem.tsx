import { ChevronDown } from 'lucide-react';
import { useEffect, useRef, useCallback } from 'react';
import gsap from 'gsap';

interface AccordionItemProps {
    question: string;
    answer: string;
    isOpen: boolean;
    onClick: () => void;
}

const AccordionItem = ({ question, answer, isOpen, onClick }: AccordionItemProps) => {
    const contentRef = useRef<HTMLDivElement | null>(null);
    const innerRef = useRef<HTMLDivElement | null>(null);
    const animation = useRef<gsap.core.Tween | null>(null);

    const animateAccordion = useCallback(() => {
        if (!contentRef.current || !innerRef.current) return;

        // Zatrzymaj poprzednią animację
        if (animation.current) {
            animation.current.kill();
        }

        // Pobierz aktualną wysokość bezpośrednio przed animacją
        const height = innerRef.current.offsetHeight;

        // Utwórz nową animację
        animation.current = gsap.to(contentRef.current, {
            height: isOpen ? height : 0,
            duration: 0.4,
            ease: "power2.inOut",
            overwrite: true,
            force3D: true,
            onComplete: () => {
                if (!contentRef.current) return;
                if (isOpen) {
                    contentRef.current.style.height = 'auto';
                }
            }
        });
    }, [isOpen]);

    // Obserwuj zmiany rozmiaru contentu
    useEffect(() => {
        if (!innerRef.current) return;

        const resizeObserver = new ResizeObserver(() => {
            if (isOpen) {
                animateAccordion();
            }
        });

        resizeObserver.observe(innerRef.current);
        return () => resizeObserver.disconnect();
    }, [isOpen, animateAccordion]);

    // Uruchom animację przy zmianie stanu isOpen
    useEffect(() => {
        animateAccordion();
    }, [isOpen, animateAccordion]);

    return (
        <div className="mb-4">
            <button
                onClick={onClick}
                className="w-full flex items-center p-6 text-left rounded-2xl
                    backdrop-blur-md bg-white/[0.02] border border-white/[0.05]
                    hover:border-white/[0.1] transition-all duration-300"
            >
                <span className="flex-1 text-base font-medium text-white">{question}</span>
                <ChevronDown
                    className={`ml-4 flex-shrink-0 w-5 h-5 text-green-400 transition-transform duration-300 
                    ${isOpen ? 'rotate-180' : 'rotate-0'}`}
                />
            </button>
            <div
                ref={contentRef}
                className="overflow-hidden will-change-[height]"
                style={{ height: 0 }}
            >
                <div
                    ref={innerRef}
                    className="p-6 text-gray-400 leading-relaxed"
                >
                    {answer}
                </div>
            </div>
        </div>
    );
};

export default AccordionItem;