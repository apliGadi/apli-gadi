import { EmiCalculator } from "@/components/emi-calculator"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Car,
  Wallet,
  CalendarDays,
  FileText,
  CheckCircle2,
  Truck,
  IndianRupee,
  Zap,
  Users,
  Headphones,
  Building2,
  HandshakeIcon,
} from "lucide-react"

const financeSteps = [
  { icon: Car, title: "Choose Your Car", description: "Browse and select your dream car from Apli Gadi inventory" },
  { icon: Wallet, title: "Select Down Payment", description: "Choose a comfortable down payment amount that works for you" },
  { icon: CalendarDays, title: "Choose EMI Tenure", description: "Select EMI tenure from 12 to 60 months based on your budget" },
  { icon: FileText, title: "Submit Documents", description: "Submit PAN, Aadhaar, and Bank statement for quick processing" },
  { icon: CheckCircle2, title: "Loan Approval", description: "Get fast approval from our trusted finance partners" },
  { icon: Truck, title: "Vehicle Delivery", description: "Drive home your car with complete Nagpur RC transfer support" },
]

const benefits = [
  { icon: IndianRupee, title: "Finance up to 90%", description: "Get maximum financing on your dream car" },
  { icon: Wallet, title: "EMI from Rs 3,000/mo", description: "Affordable monthly installments for every budget" },
  { icon: Zap, title: "Fast Approval", description: "Quick loan processing and approval within 48 hours" },
  { icon: Users, title: "Salaried & Self-Employed", description: "Finance options available for all professionals" },
  { icon: Building2, title: "Multiple Partners", description: "Choose from our network of trusted finance partners" },
  { icon: HandshakeIcon, title: "Full Assistance", description: "Complete support from application to disbursement" },
]

export default function FinancePage() {
  return (
    <div className="bg-background">
      {/* Hero */}
      <section className="bg-primary py-16 text-primary-foreground lg:py-20">
        <div className="mx-auto max-w-7xl px-4 text-center lg:px-6">
          <Badge className="mb-4 bg-accent/20 text-accent">Easy Finance</Badge>
          <h1 className="text-balance text-3xl font-bold tracking-tight md:text-5xl">
            Finance Your Dream Car
          </h1>
          <p className="mx-auto mt-4 max-w-lg text-primary-foreground/70">
            Get easy finance with minimal documentation. EMI options tailored to your budget with fast approval from our trusted partners.
          </p>
        </div>
      </section>

      {/* Finance Process */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-6">
          <div className="mb-12 text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-accent">How It Works</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground">Finance Process</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {financeSteps.map((step, i) => (
              <Card key={step.title} className="border-border bg-card">
                <CardContent className="flex flex-col gap-4 p-6">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-accent-foreground text-sm font-bold">
                      {i + 1}
                    </div>
                    <step.icon className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-card-foreground">{step.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{step.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-secondary py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-6">
          <div className="mb-12 text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-accent">Benefits</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground">Finance Benefits</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="flex items-start gap-4 rounded-xl border border-border bg-card p-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                  <benefit.icon className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-card-foreground">{benefit.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EMI Calculator */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-xl px-4 lg:px-6">
          <div className="mb-8 text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-accent">Calculator</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground">Calculate Your EMI</h2>
            <p className="mt-2 text-muted-foreground">
              Adjust the sliders to see your monthly EMI instantly
            </p>
          </div>
          <EmiCalculator />
        </div>
      </section>
    </div>
  )
}
