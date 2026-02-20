import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Phone } from "lucide-react"

export function CtaSection() {
  return (
    <section className="bg-primary py-16 text-primary-foreground lg:py-24">
      <div className="mx-auto max-w-7xl px-4 text-center lg:px-6">
        <h2 className="text-balance text-3xl font-bold tracking-tight md:text-4xl">
          Ready to Find Your Perfect Car?
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-primary-foreground/70">
          Visit our showroom in Nagpur or browse our collection online. Easy finance and instant support available.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link href="/buy">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              Browse Cars
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
          <a href="tel:+919284173612">
            <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
              <Phone className="mr-2 h-4 w-4" />
              Call Us Now
            </Button>
          </a>
        </div>
      </div>
    </section>
  )
}
