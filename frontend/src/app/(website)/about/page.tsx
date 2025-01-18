import { AboutContent } from "@/components/Content/AboutContent";
import { AboutHero } from "@/components/Content/AboutHero";
import { ClientLogos } from "@/components/Content/ClientLogos";
import { CTASection } from "@/components/Content/CtaSection";
import { Teaching } from "@/components/Content/Teaching";
import { Team } from "@/components/Content/Team";
import { Testimonials } from "@/components/Content/Testimonial";


export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutContent />
      <Team />
      <Teaching />
      <Testimonials />
      <ClientLogos />
      <CTASection />
    </>
  )
}

