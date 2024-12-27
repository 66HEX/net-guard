import Hero from "@/app/sections/Hero/hero";
import FeaturesGrid from "@/app/sections/Features/features";
import Mission from "@/app/sections/Mission/mission";
import Pricing from "@/app/sections/Pricing/pricing";
import FAQ from "@/app/sections/FAQ/faq";
import Testimonials from "@/app/sections/Testimonials/testimonials";

export default function Home() {
  return (
    <div>
        <Hero/>
        <FeaturesGrid/>
        <Mission/>
        <Pricing/>
        <FAQ/>
        <Testimonials/>
    </div>
  );
}
