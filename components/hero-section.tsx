import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calculator, Phone } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-primary text-primary-foreground">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-car.jpg"
          alt="Apli Gadi showroom"
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-primary/70" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-20 lg:px-6 lg:py-32">
        <div className="max-w-2xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5">
            <span className="h-2 w-2 rounded-full bg-accent" />
            <span className="text-sm font-medium text-accent">Nagpur&apos;s Trusted Dealership</span>
          </div>

          <h1 className="text-balance text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl">
            A Collection Built on{" "}
            <span className="text-accent">Trust</span>
          </h1>

          <p className="mt-6 max-w-lg text-pretty text-lg leading-relaxed text-primary-foreground/70">
            Apli Gadi offers verified pre-owned cars in Nagpur with easy finance, transparent pricing, and full customer support.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/buy">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                Browse Cars
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/finance">
              <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                <Calculator className="mr-2 h-4 w-4" />
                Check EMI
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="ghost" className="text-primary-foreground/80 hover:bg-primary-foreground/10 hover:text-primary-foreground">
                <Phone className="mr-2 h-4 w-4" />
                Contact Now
              </Button>
            </Link>
          </div>

          <div className="mt-12 flex items-center gap-8">
            <div>
              <p className="text-3xl font-bold text-accent">500+</p>
              <p className="text-sm text-primary-foreground/50">Cars Sold</p>
            </div>
            <div className="h-10 w-px bg-primary-foreground/20" />
            <div>
              <p className="text-3xl font-bold text-accent">98%</p>
              <p className="text-sm text-primary-foreground/50">Happy Customers</p>
            </div>
            <div className="h-10 w-px bg-primary-foreground/20" />
            <div>
              <p className="text-3xl font-bold text-accent">5+</p>
              <p className="text-sm text-primary-foreground/50">Years in Nagpur</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
