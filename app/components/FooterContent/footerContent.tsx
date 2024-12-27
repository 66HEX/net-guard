import FooterLink from "@/app/components/FooterLink/footerLink";
import {Github, Linkedin, Mail, Twitter} from "lucide-react";
import SocialLink from "@/app/components/SocialLink/socialLink";

const FooterContent = () => {
    return (
        <div className="py-16 grid grid-cols-2 md:grid-cols-4 gap-12">
            <div className="space-y-4">
                <h4 className="text-lg font-medium">Product</h4>
                <ul className="space-y-2">
                    <li><FooterLink href="#">Features</FooterLink></li>
                    <li><FooterLink href="#">Security</FooterLink></li>
                    <li><FooterLink href="#">Enterprise</FooterLink></li>
                    <li><FooterLink href="#">Pricing</FooterLink></li>
                    <li><FooterLink href="#">Demo</FooterLink></li>
                </ul>
            </div>
            <div className="space-y-4">
                <h4 className="text-lg font-medium">Company</h4>
                <ul className="space-y-2">
                    <li><FooterLink href="#">About</FooterLink></li>
                    <li><FooterLink href="#">Careers</FooterLink></li>
                    <li><FooterLink href="#">Blog</FooterLink></li>
                    <li><FooterLink href="#">Press</FooterLink></li>
                    <li><FooterLink href="#">Partners</FooterLink></li>
                </ul>
            </div>
            <div className="space-y-4">
                <h4 className="text-lg font-medium">Resources</h4>
                <ul className="space-y-2">
                    <li><FooterLink href="#">Documentation</FooterLink></li>
                    <li><FooterLink href="#">Help Center</FooterLink></li>
                    <li><FooterLink href="#">Community</FooterLink></li>
                    <li><FooterLink href="#">Case Studies</FooterLink></li>
                    <li><FooterLink href="#">API Reference</FooterLink></li>
                </ul>
            </div>
            <div className="space-y-4">
                <h4 className="text-lg font-medium">Contact</h4>
                <ul className="space-y-2">
                    <li>
                        <FooterLink href="mailto:contact@netguard.com" className="flex items-center gap-2">
                            <Mail className="w-4 h-4" />
                            contact@netguard.com
                        </FooterLink>
                    </li>
                </ul>
                <div className="flex gap-3 pt-4">
                    <SocialLink href="#" icon={Twitter} />
                    <SocialLink href="#" icon={Linkedin} />
                    <SocialLink href="#" icon={Github} />
                </div>
            </div>
        </div>
    );
};

export default FooterContent;