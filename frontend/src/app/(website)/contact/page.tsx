import { ContactForm } from "@/components/Content/ContentForm";
import { ContactHero } from "@/components/Content/ContentHero";
import { FAQ } from "@/components/Content/FAQ";
import { Locations } from "@/components/Content/Locations";

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactForm />
      <Locations />
      <FAQ />
    </>
  )
}

