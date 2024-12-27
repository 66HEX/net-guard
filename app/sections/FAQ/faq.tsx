"use client";

import { useState } from 'react';
import { MessageSquare, Sparkles, Zap } from 'lucide-react';
import GlowingBorder from "@/app/components/GlowingBorder/glowingBorder";
import AccordionCategory from "@/app/components/AccordionCategory/accordionCategory";
import BackgroundOverlay2 from "@/app/components/BackgroundOverlay2/backgroundOverlay2";

const FAQ = () => {
    const [openItems, setOpenItems] = useState<string[]>([]);
    const faqs = [
        {
            category: "General",
            icon: MessageSquare,
            questions: [
                {
                    question: "What is Zero Trust Network Access?",
                    answer: "Zero Trust Network Access (ZTNA) is a security model that requires strict identity verification for every person and device trying to access resources on a private network, regardless of whether they are sitting within or outside of the network perimeter. NetGuard implements this through continuous verification, least privilege access, and microsegmentation."
                },
                {
                    question: "How is NetGuard different from traditional VPNs?",
                    answer: "Unlike traditional VPNs, NetGuard provides granular access control, continuous verification, and better performance through our global edge network. We offer application-level access rather than network-level access, reducing your attack surface. Plus, our modern interface and easy deployment make security accessible to everyone."
                },
                {
                    question: "Do you offer a free trial?",
                    answer: "Yes! We offer a 14-day free trial on all our plans. During the trial, you'll have access to all features of your chosen plan, allowing you to fully evaluate NetGuard's capabilities. No credit card required to start."
                }
            ]
        },
        {
            category: "Security",
            icon: Sparkles,
            questions: [
                {
                    question: "How does NetGuard protect against cyber threats?",
                    answer: "NetGuard employs multiple layers of security: advanced encryption for all data in transit, continuous identity verification, real-time threat monitoring, and automated response systems. Our AI-powered system constantly learns and adapts to new threats, providing proactive protection."
                },
                {
                    question: "What encryption standards do you use?",
                    answer: "We use industry-leading encryption standards including AES-256 for data encryption and TLS 1.3 for transport security. All connections are protected with end-to-end encryption, and we regularly update our cryptographic protocols to maintain the highest security standards."
                }
            ]
        },
        {
            category: "Technical",
            icon: Zap,
            questions: [
                {
                    question: "What platforms do you support?",
                    answer: "NetGuard supports all major platforms including Windows, macOS, Linux, iOS, and Android. We also provide browser extensions for Chrome, Firefox, and Safari, ensuring secure access across all your devices."
                },
                {
                    question: "Can I integrate NetGuard with my existing tools?",
                    answer: "Yes, NetGuard offers extensive integration capabilities through our API. We support integration with major identity providers (OAuth, SAML), cloud platforms (AWS, Azure, GCP), and security tools (SIEM systems). Custom integrations are available on Enterprise plans."
                }
            ]
        }
    ];
    return (
        <section id="faq" className="relative w-full min-h-screen bg-black/60 text-white overflow-hidden">
            <BackgroundOverlay2/>
            <div className="max-w-7xl mx-auto relative py-20 px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl md:text-5xl font-medium mb-6">
                        Frequently Asked
                        <span className="bg-gradient-to-r from-green-400 to-green-700 text-transparent bg-clip-text ml-2">
                          Questions
                        </span>
                    </h2>
                    <p className="text-gray-400 text-lg">
                        Find answers to common questions about NetGuard&apos;s features, security, and technical details.
                    </p>
                </div>
                <div className="relative group max-w-4xl mx-auto">
                    <GlowingBorder />
                    <div className="relative md:backdrop-blur-md bg-white/[0.02] border border-white/[0.05]
                                    rounded-3xl p-8 group-hover:border-white/[0.1] transition-all duration-500">
                        {faqs.map((category) => (
                            <AccordionCategory
                                key={category.category}
                                title={category.category}
                                questions={category.questions}
                                openItems={openItems}
                                setOpenItems={setOpenItems}
                            />
                        ))}
                    </div>
                </div>
                <div className="text-center mt-16">
                    <p className="text-gray-400 mb-4">
                        Still have questions? We&apos;re here to help.
                    </p>
                    <button className="bg-gradient-to-r from-green-400 to-green-500 text-black px-6 py-3 rounded-full
                                        font-medium hover:opacity-90 transition-opacity inline-flex items-center gap-2">
                        Contact Support
                        <MessageSquare className="w-4 h-4" />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default FAQ;