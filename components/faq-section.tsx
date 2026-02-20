import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { faqs } from "@/lib/data"

export function FaqSection() {
  return (
    <section className="bg-secondary py-16 lg:py-24">
      <div className="mx-auto max-w-3xl px-4 lg:px-6">
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">FAQ</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Frequently Asked Questions
          </h2>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="border-border">
              <AccordionTrigger className="text-left text-base font-medium text-foreground hover:text-accent">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
