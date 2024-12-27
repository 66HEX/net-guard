interface SocialLinkProps {
    href: string;
    icon: React.ElementType;
}

const SocialLink = ({ href, icon: Icon }: SocialLinkProps) => (
        <a
            href={href}
            className="p-2 rounded-full backdrop-blur-md bg-white/[0.02] border border-white/[0.05]
                        hover:bg-white/[0.05] hover:border-white/[0.1] transition-all duration-300 group"
        >
            <Icon className="w-5 h-5 text-gray-400 group-hover:text-green-400 transition-colors duration-300" />
        </a>
);

export default SocialLink;