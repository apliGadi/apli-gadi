"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Star, User } from "lucide-react"
import { testimonials } from "@/lib/data"

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0)

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length)
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)

  return (
    <section className="bg-background py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">Testimonials</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            What Our Customers Say
          </h2>
        </div>

        {/* Desktop: show all cards in grid */}
        <div className="hidden gap-6 md:grid md:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((t) => (
            <Card key={t.id} className="border-border bg-card">
              <CardContent className="flex flex-col gap-4 p-6">
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground line-clamp-4">
                  &ldquo;{t.review}&rdquo;
                </p>
                <div className="mt-auto flex items-center gap-3 border-t border-border pt-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10">
                    <User className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-card-foreground">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.car}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Mobile: slider */}
        <div className="md:hidden">
          <Card className="border-border bg-card">
            <CardContent className="flex flex-col gap-4 p-6">
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                &ldquo;{testimonials[current].review}&rdquo;
              </p>
              <div className="mt-auto flex items-center gap-3 border-t border-border pt-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10">
                  <User className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-card-foreground">{testimonials[current].name}</p>
                  <p className="text-xs text-muted-foreground">{testimonials[current].car}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <div className="mt-4 flex items-center justify-center gap-4">
            <Button variant="outline" size="icon" onClick={prev} aria-label="Previous testimonial">
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2 w-2 rounded-full transition-colors ${i === current ? "bg-accent" : "bg-border"}`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <Button variant="outline" size="icon" onClick={next} aria-label="Next testimonial">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
