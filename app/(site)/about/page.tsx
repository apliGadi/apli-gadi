import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  ShieldCheck,
  Users,
  Car,
  Award,
  MapPin,
  ArrowRight,
} from "lucide-react"

const stats = [
  { icon: Car, value: "500+", label: "Cars Sold" },
  { icon: Users, value: "450+", label: "Happy Customers" },
  { icon: Award, value: "5+", label: "Years Experience" },
  { icon: MapPin, value: "Nagpur", label: "Maharashtra" },
]

export default function AboutPage() {
  return (
    <div className="bg-background">
      {/* Hero */}
      <section className="bg-primary py-16 text-primary-foreground lg:py-20">
        <div className="mx-auto max-w-7xl px-4 text-center lg:px-6">
          <Badge className="mb-4 bg-accent/20 text-accent">About Us</Badge>
          <h1 className="text-balance text-3xl font-bold tracking-tight md:text-5xl">
            About Apli Gadi
          </h1>
          <p className="mx-auto mt-4 max-w-lg text-primary-foreground/70">
            Nagpur&apos;s most trusted destination for verified pre-owned cars since 2020.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-3xl px-4 text-center lg:px-6">
          <h2 className="text-3xl font-bold tracking-tight text-foreground">Our Story</h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Apli Gadi was founded with a simple mission: to make buying a pre-owned car in Nagpur a transparent, trustworthy, and hassle-free experience. We understand that buying a car is a significant decision, and our team is dedicated to ensuring every customer drives home with confidence and a smile.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            With over 500 cars sold and counting, we have built a reputation for quality, honesty, and exceptional customer service. Every car in our inventory is thoroughly inspected, fairly priced, and comes with complete documentation support.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-secondary py-12">
        <div className="mx-auto max-w-7xl px-4 lg:px-6">
          <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
            {stats.map((stat) => (
              <Card key={stat.label} className="border-border bg-card text-center">
                <CardContent className="flex flex-col items-center gap-2 p-6">
                  <stat.icon className="h-8 w-8 text-accent" />
                  <p className="text-3xl font-bold text-card-foreground">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-6">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground">Our Values</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="flex flex-col items-center gap-4 rounded-xl border border-border bg-card p-8 text-center">
              <ShieldCheck className="h-10 w-10 text-accent" />
              <h3 className="text-lg font-semibold text-card-foreground">Trust & Transparency</h3>
              <p className="text-sm text-muted-foreground">
                Every car is verified, every price is honest, and every process is transparent.
              </p>
            </div>
            <div className="flex flex-col items-center gap-4 rounded-xl border border-border bg-card p-8 text-center">
              <Users className="h-10 w-10 text-accent" />
              <h3 className="text-lg font-semibold text-card-foreground">Customer First</h3>
              <p className="text-sm text-muted-foreground">
                Your satisfaction is our priority. We go above and beyond to serve you better.
              </p>
            </div>
            <div className="flex flex-col items-center gap-4 rounded-xl border border-border bg-card p-8 text-center">
              <Award className="h-10 w-10 text-accent" />
              <h3 className="text-lg font-semibold text-card-foreground">Quality Assurance</h3>
              <p className="text-sm text-muted-foreground">
                Rigorous multi-point inspection ensures only the best cars make it to our lot.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16 text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 text-center lg:px-6">
          <h2 className="text-balance text-3xl font-bold tracking-tight">
            Visit Us in Nagpur Today
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-primary-foreground/70">
            Come see our collection of verified pre-owned cars. Our team is ready to help you find the perfect match.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link href="/buy">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                Browse Cars
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
