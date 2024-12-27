import { ChevronDown } from 'lucide-react';

interface AccordionItemProps {
    question: string;
    answer: string;
    isOpen: boolean;
    onClick: () => void;
}

const AccordionItem = ({ question, answer, isOpen, onClick }: AccordionItemProps) => (
    <div className="mb-4">
        <button
            onClick={onClick}
            className="w-full flex items-center justify-between p-6 text-left rounded-2xl
        backdrop-blur-md bg-white/[0.02] border border-white/[0.05]
        hover:border-white/[0.1] transition-all duration-300"
        >
            <span className="text-base font-medium text-white">{question}</span>
            <ChevronDown
                className={`w-5 h-5 text-green-400 transition-transform duration-300 
          ${isOpen ? 'rotate-180' : 'rotate-0'}`}
            />
        </button>
        <div
            className={`overflow-hidden transition-all duration-300 ease-in-out
        ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
        >
            <div className="p-6 text-gray-400 leading-relaxed">
                {answer}
            </div>
        </div>
    </div>
);

export default AccordionItem;