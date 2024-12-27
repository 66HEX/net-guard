interface FooterLinkProps {
    href: string;
    className?: string;
    children: React.ReactNode;
}

const FooterLink = ({ href, children }: FooterLinkProps) => (
        <a
            href={href}
            className="text-gray-400 hover:text-white transition-colors duration-300"
        >
            {children}
        </a>
);

export default FooterLink;