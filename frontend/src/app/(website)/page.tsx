import { Benefits } from "@/components/Content/Benefits";
import { CTASection } from "@/components/Content/CtaSection";
import { Features } from "@/components/Content/Features";
import { Hero } from "@/components/Content/Hero";
import { HowItWorks } from "@/components/Content/HowItWorks";
import Navbar from "@/components/Content/Navbar";
import { PricingCTA } from "@/components/Content/PricingCta";
import { Testimonials } from "@/components/Content/Testimonial";


export default function Home() {
  return (
    <>
      <Navbar/>
      <Hero />
      <Features />
      <PricingCTA />
      <HowItWorks />
      <Benefits />
      <Testimonials />
      {/* <CTASection /> */}
    </>
  )
}

