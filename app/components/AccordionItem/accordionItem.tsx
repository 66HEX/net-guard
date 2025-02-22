import { ChevronDown } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import {useGSAP} from "@gsap/react";

interface AccordionItemProps {
    question: string;
    answer: string;
    isOpen: boolean;
    onClick: () => void;
}

const AccordionItem = ({ question, answer, isOpen, onClick }: AccordionItemProps) => {
    const contentRef = useRef<HTMLDivElement>(null);
    const arrowRef = useRef<HTMLDivElement>(null);
    const [contentHeight, setContentHeight] = useState<number>(0);

    useEffect(() => {
        if (contentRef.current) {
            const element = contentRef.current;
            const originalHeight = element.style.height;
            const originalOverflow = element.style.overflow;

            element.style.height = 'auto';
            element.style.overflow = 'visible';

            const height = element.scrollHeight;
            setContentHeight(height);

            element.style.height = originalHeight;
            element.style.overflow = originalOverflow;
        }
    }, [answer]);

    useGSAP(() => {
        if (!contentRef.current) return;

        const tl = gsap.timeline({
            defaults: {
                duration: 0.5,
                ease: "power2.inOut"
            }
        });

        tl.to(contentRef.current, {
            height: isOpen ? contentHeight : 0,
            force3D: true
        }, 0);

        if (arrowRef.current) {
            tl.to(arrowRef.current, {
                rotation: isOpen ? 180 : 0,
                transformOrigin: "center",
                force3D: true
            }, 0);
        }

    }, [isOpen, contentHeight]);

    return (
        <div className="mb-4">
            <button
                onClick={onClick}
                className="w-full flex items-center p-6 text-left rounded-2xl
                    backdrop-blur-md bg-white/[0.02] border border-white/[0.05]
                    hover:border-white/[0.1] transition-all duration-300"
            >
                <span className="flex-1 text-base font-medium text-white">
                    {question}
                </span>
                <div
                    ref={arrowRef}
                    className="ml-4 w-5 h-5 flex items-center justify-center will-change-transform"
                >
                    <ChevronDown
                        className="w-full h-full text-green-400"
                    />
                </div>
            </button>
            <div
                ref={contentRef}
                className="overflow-hidden h-0 will-change-[height]"
            >
                <div className="p-6 text-gray-400 leading-relaxed">
                    {answer}
                </div>
            </div>
        </div>
    );
};

export default AccordionItem;