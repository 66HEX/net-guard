interface GlowingBorderProps {

    opacity?: string;

}

const GlowingBorder = ({}: GlowingBorderProps) => (
    <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-green-400/5 via-green-500/5 to-green-600/5
    opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10" />
);

export default GlowingBorder;