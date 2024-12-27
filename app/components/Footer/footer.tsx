import NewsletterSection from "@/app/components/NewsletterSection/newsletterSection";
import BackgroundOverlay2 from "@/app/components/BackgroundOverlay2/backgroundOverlay2";
import FooterContent from "@/app/components/FooterContent/footerContent";
import BottomBar from "@/app/components/BottomBar/bottomBar";

const Footer = () => {
    return (
        <footer className="relative w-full bg-black/90 text-white overflow-hidden">
            <BackgroundOverlay2/>
            <div className="absolute inset-0">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-400/5 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-green-500/5 rounded-full blur-3xl" />
            </div>
            <div className="relative max-w-7xl mx-auto px-4">
                <NewsletterSection />
                <FooterContent />
                <BottomBar />
            </div>
        </footer>
    );
};

export default Footer;