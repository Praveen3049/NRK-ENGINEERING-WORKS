'use client'

import './globals.css'
import { Inter, Archivo } from 'next/font/google'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Menu, X, MessageCircle } from 'lucide-react'
import { useState } from 'react'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const archivo = Archivo({
  subsets: ['latin'],
  variable: '--font-archivo',
})

function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/about', label: 'About' },
    { href: '/gallery', label: 'Projects' },
    { href: '/contact', label: 'Contact' }
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-12 h-12 flex items-center justify-center rounded overflow-hidden">
              <img src="/images/projects/logo.png" alt="NRK Logo" className="w-full h-full object-contain" />
            </div>
            <div>
              <div className="text-white font-bold text-sm sm:text-base md:text-xl uppercase tracking-wider leading-tight">NRK ENGINEERING WORKS</div>
              <div className="text-gray-400 text-[10px] sm:text-xs">Fabrication Management</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-300 hover:text-yellow-500 transition-colors font-medium"
              >
                {link.label}
              </Link>
            ))}
            <Link href="/contact">
              <Button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold text-xs sm:text-sm">
                Get Quote
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-zinc-800">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-gray-300 hover:text-yellow-500 transition-colors font-medium py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold">
                  Get Quote
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

function Footer() {
  return (
    <footer className="bg-zinc-900 border-t border-zinc-800 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 flex items-center justify-center rounded overflow-hidden bg-white/5">
                <img src="/images/projects/logo.png" alt="NRK Logo" className="w-full h-full object-contain" />
              </div>
              <div>
                <div className="text-white font-bold text-lg sm:text-xl uppercase tracking-wider break-words">NRK-ENG-WORKS</div>
                <div className="text-gray-400 text-xs">Quality Metalwork</div>
              </div>
            </div>
            <p className="text-gray-400 mb-4 text-sm sm:text-base">
              Professional engineering and fabrication services with over 20 years of experience. 
              We specialize in Vibrating-Screens, Grizzly-Feeders, Jaw-Crusher Maintenance, Vibrating-Feeder, Supporting Structures, Steel Ramps, Conveyor-Systems, Roller-Frames and Crusher-Parts.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-4">Quick Links</h3>
            <div className="flex flex-col gap-2">
              <Link href="/" className="text-gray-400 hover:text-yellow-500 transition-colors">Home</Link>
              <Link href="/about" className="text-gray-400 hover:text-yellow-500 transition-colors">About Us</Link>
              <Link href="/services" className="text-gray-400 hover:text-yellow-500 transition-colors">Services</Link>
              <Link href="/gallery" className="text-gray-400 hover:text-yellow-500 transition-colors">Projects</Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold mb-4">Contact</h3>
            <div className="flex flex-col gap-2 text-gray-400 text-sm sm:text-base break-words">
              <p>+91 8500193091</p>
              <p>+91 7396881999</p>
              <p>nrkengworkshyd@gmail.com</p>
              <p>Near Jaibery colony, Kompally, Hyderabad, Kaziguda, Telangana, 500100</p>
              <p>GFR9+F75 Hyderabad, Telangana, India</p>
            </div>
          </div>
        </div>

        <div className="border-t border-zinc-800 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} NRK-ENGINEERING-WORKS. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <title>NRK Engineering Works Hyderabad | Welding & Fabrication Services</title>
        <meta name="description" content="NRK Engineering Works offers professional welding, fabrication, and machining services in Hyderabad. Contact us for reliable industrial solutions." />
        <meta name="keywords" content="NRK Engineering Works, Engineering Works Hyderabad, Crusher spare parts fabrication, Steel structure fabrication Hyderabad, Sand washing plants, Custom metalwork, Vibrating screens maintenance, Industrial fabrication, Hyderabad metal works" />
        <meta name="author" content="NRK Engineering Works" />
        
        {/* Open Graph / Social Media */}
        <meta property="og:title" content="NRK Engineering Works | Custom Fabrication & Engineering" />
        <meta property="og:description" content="Quality Metalwork and Industrial Fabrication Services in Hyderabad. 20+ Years of Experience." />
        <meta property="og:image" content="/images/projects/logo.png" />
        <meta property="og:type" content="website" />
        
        {/* Mobile Optimization */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body className={`${inter.variable} ${archivo.variable} font-sans bg-black text-white overflow-x-hidden w-full`}>
        <Navigation />
        <main className="pt-20 overflow-x-hidden">{children}</main>
        <Footer />
        
        {/* WhatsApp Floating Button */}
        <a
          href="https://wa.me/918500193091"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-8 right-8 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 z-50"
          aria-label="Contact on WhatsApp"
        >
          <MessageCircle className="w-8 h-8" />
        </a>
      </body>
    </html>
  )
}
