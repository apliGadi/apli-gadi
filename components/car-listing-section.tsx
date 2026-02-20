import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CarCard } from "@/components/car-card"
import { cars } from "@/lib/data"
import { ArrowRight } from "lucide-react"

export function CarListingSection() {
  const featuredCars = cars.filter((c) => !c.sold).slice(0, 6)

  return (
    <section className="bg-background py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <div className="mb-10 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-accent">Our Inventory</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Featured Cars
            </h2>
            <p className="mt-2 text-muted-foreground">
              Hand-picked verified pre-owned cars available in Nagpur
            </p>
          </div>
          <Link href="/buy">
            <Button variant="outline" className="gap-2">
              View All Cars
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredCars.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
      </div>
    </section>
  )
}
