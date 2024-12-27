import FooterLink from "@/app/components/FooterLink/footerLink";

const BottomBar = () => {
    return (
        <div className="py-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-green-400 to-green-500" />
                <span className="font-medium">NetGuard</span>
                <span className="text-gray-400 ml-4">© 2024. All rights reserved.</span>
            </div>
            <div className="flex gap-6">
                <FooterLink href="#">Privacy Policy</FooterLink>
                <FooterLink href="#">Terms of Service</FooterLink>
                <FooterLink href="#">Cookie Settings</FooterLink>
            </div>
        </div>
    );
};

export default BottomBar;