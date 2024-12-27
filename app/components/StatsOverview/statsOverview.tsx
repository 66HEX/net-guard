const StatsOverview = () => (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
        {[
            { value: "99.99%", label: "Uptime" },
            { value: "50ms", label: "Avg. Latency" },
            { value: "200+", label: "Edge Locations" },
            { value: "24/7", label: "Support" }
        ].map((stat, index) => (
            <div key={index} className="text-center p-4 rounded-2xl bg-white/[0.02] border border-white/[0.05]">
                <div className="text-2xl font-bold text-green-400">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
        ))}
    </div>
);

export default StatsOverview