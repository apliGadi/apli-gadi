"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "sonner"
import {
  Zap,
  IndianRupee,
  Clock,
  FileCheck,
  Upload,
} from "lucide-react"

const benefits = [
  { icon: Zap, title: "Instant Valuation", description: "Get a fair price estimate for your car within minutes" },
  { icon: IndianRupee, title: "Best Price in Nagpur", description: "We offer the best market price for your car" },
  { icon: Clock, title: "Same Day Deal", description: "Quick evaluation and payment on the same day" },
  { icon: FileCheck, title: "RC Transfer Support", description: "Complete RC transfer assistance at Nagpur RTO" },
]

export default function SellPage() {
  const [submitting, setSubmitting] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitting(true)
    // Simulate submission
    await new Promise((r) => setTimeout(r, 1000))
    setSubmitting(false)
    toast.success("Your car details have been submitted! Our team will contact you shortly.")
    ;(e.target as HTMLFormElement).reset()
  }

  return (
    <div className="bg-background">
      {/* Hero */}
      <section className="bg-primary py-16 text-primary-foreground lg:py-20">
        <div className="mx-auto max-w-7xl px-4 text-center lg:px-6">
          <Badge className="mb-4 bg-accent/20 text-accent">Sell Your Car</Badge>
          <h1 className="text-balance text-3xl font-bold tracking-tight md:text-5xl">
            Sell Your Car at the Best Price
          </h1>
          <p className="mx-auto mt-4 max-w-lg text-primary-foreground/70">
            Get an instant valuation and the best price for your car in Nagpur. Same day deal possible with complete RC transfer support.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 lg:px-6">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((b) => (
              <div key={b.title} className="flex items-start gap-3 rounded-xl border border-border bg-card p-4">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                  <b.icon className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-card-foreground">{b.title}</h3>
                  <p className="text-xs text-muted-foreground">{b.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="pb-16 lg:pb-24">
        <div className="mx-auto max-w-2xl px-4 lg:px-6">
          <Card className="border-border bg-card">
            <CardHeader>
              <CardTitle className="text-card-foreground">Submit Your Car Details</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="flex flex-col gap-1.5">
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" name="name" placeholder="Your full name" required />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" name="phone" type="tel" placeholder="+91 XXXXX XXXXX" required />
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="flex flex-col gap-1.5">
                    <Label htmlFor="carModel">Car Brand & Model</Label>
                    <Input id="carModel" name="carModel" placeholder="e.g. Maruti Swift VXI" required />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <Label htmlFor="year">Manufacturing Year</Label>
                    <Input id="year" name="year" type="number" placeholder="e.g. 2020" min="2000" max="2026" required />
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="flex flex-col gap-1.5">
                    <Label htmlFor="km">KM Driven</Label>
                    <Input id="km" name="km" type="number" placeholder="e.g. 25000" required />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <Label htmlFor="expectedPrice">Expected Price (Rs)</Label>
                    <Input id="expectedPrice" name="expectedPrice" type="number" placeholder="e.g. 500000" required />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <Label htmlFor="images">Upload Car Images</Label>
                  <div className="flex items-center gap-3 rounded-lg border border-input bg-background px-4 py-3">
                    <Upload className="h-5 w-5 text-muted-foreground" />
                    <Input id="images" name="images" type="file" accept="image/*" multiple className="border-0 p-0 shadow-none" />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <Label htmlFor="notes">Additional Notes (optional)</Label>
                  <Textarea id="notes" name="notes" placeholder="Any additional information about your car..." rows={3} />
                </div>

                <Button type="submit" size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90" disabled={submitting}>
                  {submitting ? "Submitting..." : "Submit for Valuation"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
