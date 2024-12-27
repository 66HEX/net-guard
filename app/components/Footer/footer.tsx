import NewsletterSection from "@/app/components/NewsletterSection/newsletterSection";
import FooterContent from "@/app/components/FooterContent/footerContent";
import BottomBar from "@/app/components/BottomBar/bottomBar";

const Footer = () => {
    return (
        <footer className="relative w-full bg-black text-white overflow-hidden">
            <div className="relative max-w-7xl mx-auto px-4">
                <NewsletterSection />
                <FooterContent />
                <BottomBar />
            </div>
        </footer>
    );
};

export default Footer;