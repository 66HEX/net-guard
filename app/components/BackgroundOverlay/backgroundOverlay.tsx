export default function backgroundOverlay() {
    return (
        <div className="absolute -z-10 w-full h-full bg-black">
            <div
                className="absolute inset-0 bg-gradient-to-b from-emerald-300/40 to-transparent"
                style={{
                    background: 'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(16, 185, 129, 0.5) 0%, transparent 70%)'
                }}
            />
            <div
                className="absolute inset-0"
                style={{
                    background: 'linear-gradient(180deg, transparent 0%, rgba(16, 185, 129, 0.35) 30%, rgba(16, 185, 129, 0.2) 70%, transparent 100%)'
                }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-75" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-950/50 to-black opacity-40" />
        </div>
    );
};