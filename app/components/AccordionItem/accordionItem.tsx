import { ChevronDown } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

interface AccordionItemProps {
    question: string;
    answer: string;
    isOpen: boolean;
    onClick: () => void;
}

const AccordionItem = ({ question, answer, isOpen, onClick }: AccordionItemProps) => {
    const contentRef = useRef<HTMLDivElement>(null);
    const [contentHeight, setContentHeight] = useState(0);

    useEffect(() => {
        const element = contentRef.current;
        if (!element) return;

        const updateHeight = () => {
            const innerContent = element.firstElementChild;
            if (innerContent instanceof HTMLElement) {
                setContentHeight(innerContent.offsetHeight);
            }
        };

        window.addEventListener('resize', updateHeight);
        updateHeight();

        return () => window.removeEventListener('resize', updateHeight);
    }, [answer]);

    useEffect(() => {
        const element = contentRef.current;
        if (!element) return;

        gsap.to(element, {
            height: isOpen ? contentHeight : 0,
            duration: 0.5,
            ease: 'power2.out'
        });
    }, [isOpen, contentHeight]);

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
                className="overflow-hidden"
                style={{ height: 0 }}
            >
                <div className="p-6 text-gray-400 leading-relaxed">
                    {answer}
                </div>
            </div>
        </div>
    );
};

export default AccordionItem;