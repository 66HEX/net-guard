interface PricingToggleProps {
    isAnnual: boolean;
    setIsAnnual: React.Dispatch<React.SetStateAction<boolean>>;
}

const PricingToggle = ({ isAnnual, setIsAnnual }: PricingToggleProps) => (
    <div className="flex items-center justify-center gap-4 mb-16">
        <span className={`text-sm ${!isAnnual ? 'text-white' : 'text-gray-400'}`}>Monthly</span>
        <button
            onClick={() => setIsAnnual(!isAnnual)}
            className="relative w-16 h-8 rounded-full bg-white/[0.05] backdrop-blur-sm p-1 transition-colors"
        >
            <div
                className={`absolute w-6 h-6 rounded-full -translate-y-1/2 bg-gradient-to-r from-green-400 to-green-700 
          transition-transform duration-200 ${isAnnual ? 'translate-x-8' : 'translate-x-0'}`}
            />
        </button>
        <span className={`text-sm ${isAnnual ? 'text-white' : 'text-gray-400'}`}>
      Annual
      <span className="ml-1 text-green-400 text-xs">Save 20%</span>
    </span>
    </div>
);

export default PricingToggle;