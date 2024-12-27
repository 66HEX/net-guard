import AccordionItem from "@/app/components/AccordionItem/accordionItem";

interface Question {
    question: string;
    answer: string;
}

interface AccordionCategoryProps {
    title: string;
    questions: Question[];
    openItems: string[];
    setOpenItems: React.Dispatch<React.SetStateAction<string[]>>;
}

const AccordionCategory = ({ title, questions, openItems, setOpenItems }: AccordionCategoryProps) => (
    <div className="mb-12 last:mb-0">
        <h3 className="text-xl font-medium text-white mb-6">{title}</h3>
        {questions.map((item, index) => (
            <AccordionItem
                key={index}
                question={item.question}
                answer={item.answer}
                isOpen={openItems.includes(`${title}-${index}`)}
                onClick={() => {
                    const itemId = `${title}-${index}`;
                    setOpenItems(prev =>
                        prev.includes(itemId)
                            ? prev.filter(id => id !== itemId)
                            : [...prev, itemId]
                    );
                }}
            />
        ))}
    </div>
);

export default AccordionCategory;