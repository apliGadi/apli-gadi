import type { Metadata, Viewport } from 'next'
import { Inter, DM_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Toaster } from '@/components/ui/sonner'
import './globals.css'

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-dm-sans" })

export const metadata: Metadata = {
  title: 'Apli Gadi - Trusted Pre-Owned Cars in Nagpur',
  description: 'Buy verified pre-owned cars in Nagpur with easy finance, transparent pricing, and full customer support. EMI starting from Rs 3,000/month.',
  keywords: 'pre-owned cars Nagpur, used cars Nagpur, second hand cars, Apli Gadi, car finance Nagpur',
}

export const viewport: Viewport = {
  themeColor: '#1a1a1a',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${dmSans.variable} font-sans antialiased`}>
        {children}
        <Toaster />
        <Analytics />
      </body>
    </html>
  )
}
