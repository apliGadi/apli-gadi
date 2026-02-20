import Link from "next/link"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Fuel, Gauge, Calendar, Settings2 } from "lucide-react"
import { type Car, formatPrice, formatKm } from "@/lib/data"

export function CarCard({ car }: { car: Car }) {
  return (
    <Card className="group overflow-hidden border-border bg-card transition-shadow hover:shadow-lg">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={car.image}
          alt={`${car.brand} ${car.model} ${car.variant}`}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {car.sold && (
          <div className="absolute inset-0 flex items-center justify-center bg-primary/70">
            <Badge className="bg-accent text-accent-foreground text-lg px-4 py-2">SOLD</Badge>
          </div>
        )}
        <div className="absolute top-3 left-3 flex gap-2">
          <Badge className="bg-primary/80 text-primary-foreground">{car.registrationState}</Badge>
          <Badge className="bg-accent/90 text-accent-foreground">{car.ownership}</Badge>
        </div>
      </div>
      <CardContent className="flex flex-col gap-3 p-4">
        <div>
          <p className="text-sm text-muted-foreground">{car.brand}</p>
          <h3 className="text-lg font-semibold text-card-foreground">
            {car.model} {car.variant}
          </h3>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
            <Calendar className="h-3.5 w-3.5" />
            {car.year}
          </div>
          <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
            <Gauge className="h-3.5 w-3.5" />
            {formatKm(car.kmDriven)}
          </div>
          <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
            <Fuel className="h-3.5 w-3.5" />
            {car.fuelType}
          </div>
          <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
            <Settings2 className="h-3.5 w-3.5" />
            {car.transmission}
          </div>
        </div>

        <div className="mt-1 border-t border-border pt-3">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-2xl font-bold text-card-foreground">
                {"₹"}{formatPrice(car.price)}
              </p>
              <p className="text-xs text-muted-foreground">
                EMI from {"₹"}{car.emiStarting.toLocaleString("en-IN")}/mo
              </p>
            </div>
            <Link href={`/car/${car.id}`}>
              <Button size="sm" className="bg-accent text-accent-foreground hover:bg-accent/90">
                View Details
              </Button>
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
