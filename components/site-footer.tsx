import Link from "next/link"
import { Car, Phone, Mail, MapPin } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2">
              <Car className="h-7 w-7 text-accent" />
              <span className="text-xl font-bold">
                Apli <span className="text-accent">Gadi</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-primary-foreground/70">
              Nagpur&apos;s most trusted pre-owned car dealership. Verified cars, transparent pricing, and complete customer support.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-primary-foreground/50">Quick Links</h3>
            <Link href="/buy" className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground">Browse Cars</Link>
            <Link href="/sell" className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground">Sell Your Car</Link>
            <Link href="/finance" className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground">Finance / EMI</Link>
            <Link href="/about" className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground">About Us</Link>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-primary-foreground/50">Popular Brands</h3>
            <Link href="/buy?brand=Maruti+Suzuki" className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground">Maruti Suzuki</Link>
            <Link href="/buy?brand=Hyundai" className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground">Hyundai</Link>
            <Link href="/buy?brand=Tata" className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground">Tata</Link>
            <Link href="/buy?brand=Honda" className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground">Honda</Link>
            <Link href="/buy?brand=Toyota" className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground">Toyota</Link>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-primary-foreground/50">Contact</h3>
            <a href="tel:+919876543210" className="flex items-center gap-2 text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground">
              <Phone className="h-4 w-4 shrink-0" />
              +91 98765 43210
            </a>
            <a href="mailto:info@apligadi.in" className="flex items-center gap-2 text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground">
              <Mail className="h-4 w-4 shrink-0" />
              info@apligadi.in
            </a>
            <div className="flex items-start gap-2 text-sm text-primary-foreground/70">
              <MapPin className="h-4 w-4 shrink-0 mt-0.5" />
              <span>Wardha Road, Near Airport, Nagpur, Maharashtra 440025</span>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-primary-foreground/10 pt-8 md:flex-row">
          <p className="text-xs text-primary-foreground/50">
            2026 Apli Gadi. All rights reserved.
          </p>
          <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-[#25D366] px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-[#20BD5A]"
          >
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            WhatsApp Us
          </a>
        </div>
      </div>
    </footer>
  )
}
