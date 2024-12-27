import GlowingBorder from "@/app/components/GlowingBorder/glowingBorder";
import {Quote, Star} from "lucide-react";

interface Testimonial {
    author: string;
    position: string;
    content: string;
    rating: number;
    avatar: string;
}

interface TestimonialCardProps {
    testimonial: Testimonial;
    isActive: boolean;
}

const TestimonialCard = ({ testimonial, isActive }: TestimonialCardProps) => (
    <div className={`relative group transition-all duration-500 ${isActive ? 'opacity-100 scale-100' : 'opacity-50 scale-95'}`}>
        <GlowingBorder />
        <div className="relative backdrop-blur-md bg-white/[0.02] border border-white/[0.05]
                        rounded-3xl p-8 group-hover:border-white/[0.1] transition-all duration-500 min-h-[400px] md:min-h-[300px] flex flex-col">
            <div className="absolute -top-4 -left-4">
                <div className="relative">
                    <div className="absolute inset-0 bg-green-400/20 blur-xl" />
                    <Quote className="w-8 h-8 text-green-400 relative z-10" />
                </div>
            </div>
            <div className="flex-grow mb-6">
                <p className="text-gray-300 text-lg leading-relaxed italic">
                    &quot;{testimonial.content}&quot;
                </p>
            </div>
            <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                    <Star key={i}
                          className={`w-5 h-5 ${i < testimonial.rating ? 'text-green-400' : 'text-gray-600'}`}
                          fill={i < testimonial.rating ? 'currentColor' : 'none'}
                    />
                ))}
            </div>
            <div className="flex items-center gap-4">
                <div className="relative">
                    <div className="w-12 h-12 rounded-full overflow-hidden bg-gradient-to-r from-green-400 to-green-500 p-[2px]">
                        <div className="w-full h-full rounded-full overflow-hidden">
                            <img
                                src={testimonial.avatar}
                                alt={testimonial.author}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
                <div>
                    <h4 className="font-medium text-white">{testimonial.author}</h4>
                    <p className="text-sm text-gray-400">{testimonial.position}</p>
                </div>
            </div>
        </div>
    </div>
);

export default TestimonialCard;