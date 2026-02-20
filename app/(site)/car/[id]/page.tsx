import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { EmiCalculator } from "@/components/emi-calculator"
import {
  ArrowLeft,
  Calendar,
  Fuel,
  Gauge,
  Settings2,
  Palette,
  Shield,
  Users,
  Car,
  Phone,
  MessageCircle,
} from "lucide-react"
import { cars, formatPrice, formatKm } from "@/lib/data"

export function generateStaticParams() {
  return cars.map((car) => ({ id: car.id }))
}

export default async function CarDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const car = cars.find((c) => c.id === id)

  if (!car) return notFound()

  const specs = [
    { icon: Calendar, label: "Year", value: car.year.toString() },
    { icon: Gauge, label: "KM Driven", value: formatKm(car.kmDriven) },
    { icon: Fuel, label: "Fuel Type", value: car.fuelType },
    { icon: Settings2, label: "Transmission", value: car.transmission },
    { icon: Car, label: "Engine", value: car.engine },
    { icon: Gauge, label: "Mileage", value: car.mileage },
    { icon: Palette, label: "Color", value: car.color },
    { icon: Users, label: "Ownership", value: car.ownership },
    { icon: Shield, label: "Insurance", value: car.insurance },
  ]

  return (
    <div className="bg-background py-6 lg:py-10">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <Link
          href="/buy"
          className="mb-6 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to all cars
        </Link>

        <div className="grid gap-8 lg:grid-cols-5">
          {/* Left: Images + Specs */}
          <div className="flex flex-col gap-6 lg:col-span-3">
            <div className="relative aspect-[16/10] overflow-hidden rounded-xl">
              <Image
                src={car.image}
                alt={`${car.brand} ${car.model} ${car.variant}`}
                fill
                className="object-cover"
                priority
              />
              {car.sold && (
                <div className="absolute inset-0 flex items-center justify-center bg-primary/60">
                  <Badge className="bg-accent text-accent-foreground text-2xl px-6 py-3">SOLD</Badge>
                </div>
              )}
            </div>

            <Card className="border-border bg-card">
              <CardHeader>
                <CardTitle className="text-card-foreground">Specifications</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                  {specs.map((spec) => (
                    <div key={spec.label} className="flex items-start gap-3">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                        <spec.icon className="h-4 w-4 text-accent" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">{spec.label}</p>
                        <p className="text-sm font-medium text-card-foreground">{spec.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right: Price + Actions + EMI */}
          <div className="flex flex-col gap-6 lg:col-span-2">
            <Card className="border-border bg-card">
              <CardContent className="flex flex-col gap-4 p-6">
                <div>
                  <p className="text-sm text-muted-foreground">{car.brand}</p>
                  <h1 className="text-2xl font-bold text-card-foreground">
                    {car.model} {car.variant}
                  </h1>
                  <div className="mt-2 flex flex-wrap gap-2">
                    <Badge variant="secondary">{car.year}</Badge>
                    <Badge variant="secondary">{car.fuelType}</Badge>
                    <Badge variant="secondary">{car.transmission}</Badge>
                    <Badge variant="secondary">{car.registrationState}</Badge>
                  </div>
                </div>

                <Separator />

                <div>
                  <p className="text-3xl font-bold text-card-foreground">
                    {"₹"}{formatPrice(car.price)}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    EMI from {"₹"}{car.emiStarting.toLocaleString("en-IN")}/month
                  </p>
                </div>

                <div className="flex items-center gap-2 rounded-lg bg-accent/10 px-4 py-2.5">
                  <Shield className="h-4 w-4 text-accent" />
                  <span className="text-sm font-medium text-accent">Finance Available</span>
                </div>

                <div className="flex flex-col gap-3">
                  <Link href="/contact">
                    <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90" size="lg">
                      Book Test Drive
                    </Button>
                  </Link>
                  <Link href="/finance">
                    <Button variant="outline" className="w-full" size="lg">
                      Apply for Finance
                    </Button>
                  </Link>
                  <a
                    href={`https://wa.me/919876543210?text=Hi, I am interested in ${car.brand} ${car.model} ${car.variant} (${car.year}) listed at Rs ${car.price.toLocaleString("en-IN")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="outline" className="w-full gap-2 border-[#25D366] text-[#25D366] hover:bg-[#25D366]/10" size="lg">
                      <MessageCircle className="h-4 w-4" />
                      WhatsApp Inquiry
                    </Button>
                  </a>
                </div>

                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Phone className="h-4 w-4" />
                  <span>Call us: +91 98765 43210</span>
                </div>
              </CardContent>
            </Card>

            <EmiCalculator defaultPrice={car.price} />
          </div>
        </div>
      </div>
    </div>
  )
}
