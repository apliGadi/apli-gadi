import { HeroSection } from "@/components/hero-section"
import { CarListingSection } from "@/components/car-listing-section"
import { WhyChooseSection } from "@/components/why-choose-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { FaqSection } from "@/components/faq-section"
import { CtaSection } from "@/components/cta-section"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <CarListingSection />
      <WhyChooseSection />
      <TestimonialsSection />
      <FaqSection />
      <CtaSection />
    </>
  )
}
