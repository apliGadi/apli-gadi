"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "sonner"
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react"

const contactInfo = [
  {
    icon: MapPin,
    title: "Showroom Address",
    details: "Wardha Road, Near Airport, Nagpur, Maharashtra 440025",
  },
  {
    icon: Phone,
    title: "Phone",
    details: "+91 98765 43210",
    href: "tel:+919876543210",
  },
  {
    icon: Mail,
    title: "Email",
    details: "info@apligadi.in",
    href: "mailto:info@apligadi.in",
  },
  {
    icon: Clock,
    title: "Working Hours",
    details: "Mon - Sat: 10:00 AM - 8:00 PM, Sunday: 11:00 AM - 6:00 PM",
  },
]

export default function ContactPage() {
  const [submitting, setSubmitting] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitting(true)
    await new Promise((r) => setTimeout(r, 1000))
    setSubmitting(false)
    toast.success("Message sent! Our team will get back to you soon.")
    ;(e.target as HTMLFormElement).reset()
  }

  return (
    <div className="bg-background">
      {/* Hero */}
      <section className="bg-primary py-16 text-primary-foreground lg:py-20">
        <div className="mx-auto max-w-7xl px-4 text-center lg:px-6">
          <Badge className="mb-4 bg-accent/20 text-accent">Get in Touch</Badge>
          <h1 className="text-balance text-3xl font-bold tracking-tight md:text-5xl">
            Contact Apli Gadi
          </h1>
          <p className="mx-auto mt-4 max-w-lg text-primary-foreground/70">
            Visit our showroom in Nagpur or reach out to us. We are here to help you find the perfect car.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-6">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Contact Info + Map */}
            <div className="flex flex-col gap-6">
              <div className="grid gap-4 sm:grid-cols-2">
                {contactInfo.map((info) => (
                  <Card key={info.title} className="border-border bg-card">
                    <CardContent className="flex items-start gap-3 p-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                        <info.icon className="h-5 w-5 text-accent" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-card-foreground">{info.title}</p>
                        {info.href ? (
                          <a href={info.href} className="text-sm text-muted-foreground hover:text-accent">
                            {info.details}
                          </a>
                        ) : (
                          <p className="text-sm text-muted-foreground">{info.details}</p>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Google Map */}
              <div className="overflow-hidden rounded-xl border border-border">
                <iframe
                  title="Apli Gadi Showroom Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.5!2d79.089!3d21.145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sNagpur!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              <a
                href="https://wa.me/919876543210?text=Hi, I want to inquire about cars at Apli Gadi"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="w-full gap-2 bg-[#25D366] text-foreground hover:bg-[#20BD5A]" size="lg">
                  <MessageCircle className="h-5 w-5" />
                  Chat on WhatsApp
                </Button>
              </a>
            </div>

            {/* Contact Form */}
            <Card className="border-border bg-card">
              <CardHeader>
                <CardTitle className="text-card-foreground">Send Us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="flex flex-col gap-1.5">
                      <Label htmlFor="name">Full Name</Label>
                      <Input id="name" name="name" placeholder="Your name" required />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" name="phone" type="tel" placeholder="+91 XXXXX XXXXX" required />
                    </div>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" name="email" type="email" placeholder="your@email.com" />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" name="subject" placeholder="How can we help?" required />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" name="message" placeholder="Your message..." rows={4} required />
                  </div>
                  <Button type="submit" size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90" disabled={submitting}>
                    {submitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
