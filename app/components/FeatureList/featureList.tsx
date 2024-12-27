import {CheckCircle} from "lucide-react";

interface FeatureListProps {
    features: string[];
}

const FeatureList = ({ features }: FeatureListProps) => (
    <div className="space-y-3">
        {features.map((feature, index) => (
            <div key={index} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
                <span className="text-sm text-gray-300">{feature}</span>
            </div>
        ))}
    </div>
);

export default FeatureList;