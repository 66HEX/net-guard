interface FeatureMetricProps {
    label: string;
    value: string | number;
}

const FeatureMetric: React.FC<FeatureMetricProps> = ({ label, value }) => (
    <div className="flex flex-col items-center bg-white/[0.03] rounded-2xl p-3">
        <span className="text-2xl font-bold text-green-400">{value}</span>
        <span className="text-sm text-gray-400">{label}</span>
    </div>
);

export default FeatureMetric;