import {
  ShieldCheck,
  IndianRupee,
  EyeOff,
  Wallet,
  FileCheck,
  Headphones,
} from "lucide-react"

const reasons = [
  {
    icon: ShieldCheck,
    title: "Verified Cars",
    description: "Every car undergoes rigorous multi-point inspection before listing.",
  },
  {
    icon: IndianRupee,
    title: "Transparent Pricing",
    description: "What you see is what you pay. No surprises, no hidden costs.",
  },
  {
    icon: EyeOff,
    title: "No Hidden Charges",
    description: "All charges are disclosed upfront. Complete transparency guaranteed.",
  },
  {
    icon: Wallet,
    title: "Easy Finance Options",
    description: "Up to 90% finance with EMI starting from just Rs 3,000/month.",
  },
  {
    icon: FileCheck,
    title: "RC Transfer Support",
    description: "Complete RC transfer assistance at Nagpur RTO at no extra cost.",
  },
  {
    icon: Headphones,
    title: "Full Customer Support",
    description: "Dedicated support from browsing to buying to after-sales service.",
  },
]

export function WhyChooseSection() {
  return (
    <section className="bg-secondary py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">Why Us</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Why Choose Apli Gadi
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-muted-foreground">
            We are committed to making your pre-owned car buying experience seamless and trustworthy.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="flex flex-col items-start gap-4 rounded-xl border border-border bg-card p-6 transition-shadow hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                <reason.icon className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-card-foreground">{reason.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
