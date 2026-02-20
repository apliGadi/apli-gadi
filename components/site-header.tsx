"use client"

import { useState, useId } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"

const navLinks = [
  { href: "/buy", label: "Buy a Car" },
  { href: "/sell", label: "Sell Your Car" },
  { href: "/finance", label: "Finance / EMI" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const sheetId = useId()

  return (
    <header className="sticky top-0 z-50 bg-primary text-primary-foreground">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 lg:px-6">
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo.png"
            alt="Apli Gadl.in - Pre-Owned Cars"
            width={140}
            height={56}
            style={{ height: "48px", width: "auto" }}
            priority
          />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-primary-foreground/80 transition-colors hover:text-primary-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link href="/buy">
            <Button className="bg-accent text-accent-foreground hover:bg-accent/90">
              Buy a Car
            </Button>
          </Link>
          <Link href="/sell">
            <Button variant="outline" className="border-primary-foreground/30 text-red-600 hover:bg-primary-foreground/10">
              Sell a Car
            </Button>
          </Link>
        </div>

        <Sheet key={sheetId} open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary-foreground/10">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-72 bg-primary text-primary-foreground">
            <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
            <div className="flex flex-col gap-6 pt-6">
              <Link href="/" className="flex items-center" onClick={() => setOpen(false)}>
                <Image
                  src="/images/logo.png"
                  alt="Apli Gadl.in - Pre-Owned Cars"
                  width={220}
                  height={48}
                  style={{ height: "40px", width: "auto" }}
                />
              </Link>
              <nav className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="rounded-md px-3 py-3 text-base font-medium text-primary-foreground/80 transition-colors hover:bg-primary-foreground/10 hover:text-primary-foreground"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
              <div className="flex flex-col gap-3 px-3">
                <Link href="/buy" onClick={() => setOpen(false)}>
                  <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                    Buy a Car
                  </Button>
                </Link>
                <Link href="/sell" onClick={() => setOpen(false)}>
                  <Button variant="outline" className="w-full border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                    Sell a Car
                  </Button>
                </Link>
              </div>
              <div className="mt-auto px-3">
                <a href="tel:+919284173612" className="flex items-center gap-2 text-sm text-primary-foreground/70">
                  <Phone className="h-4 w-4" />
                  +91 92841 73612
                </a>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
