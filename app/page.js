'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { 
  ArrowRight, Shield, Home as HomeIcon, MoveVertical, 
  Factory, Wrench, CheckCircle, Phone, Award, Clock
} from 'lucide-react'

export default function Home() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 }
  }

  const featuredServices = [
    { title: 'Welding Services', icon: <Shield className="w-10 h-10" />, desc: 'Expert ARC, MIG & TIG welding for all industrial needs.' },
    { title: 'Steel Fabrication', icon: <HomeIcon className="w-10 h-10" />, desc: 'Custom structural frameworks and heavy-duty components.' },
    { title: 'Machining Work', icon: <MoveVertical className="w-10 h-10" />, desc: 'High-precision lathe and machine shop services.' },
    { title: 'Industrial Repairs', icon: <Wrench className="w-10 h-10" />, desc: 'Reliable on-site maintenance and machinery repairs.' }
  ]

  return (
    <div className="bg-black min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/6036672/pexels-photo-6036672.jpeg"
            alt="NRK Engineering Works Hyderabad"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-3xl sm:text-5xl md:text-6xl font-display font-bold text-white mb-6 tracking-tight leading-tight"
          >
            NRK Engineering Works – Welding, Fabrication & Machining Services in Hyderabad
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-10 font-light leading-relaxed max-w-3xl mx-auto"
          >
            We provide high-quality engineering solutions including welding, fabrication, and industrial machining services in Hyderabad with reliable and experienced workmanship.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <a href="tel:+918500193091">
              <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-10 py-8 text-lg">
                <Phone className="mr-2" /> Call Now
              </Button>
            </a>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black px-10 py-8 text-lg">
                Get a Free Quote
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Summary Section */}
      <section className="py-24 px-4 bg-zinc-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeIn}>
              <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">Expert Engineering Solutions</h2>
              <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                With over 20 years of experience, NRK Engineering Works is a leader in precision metalwork and industrial maintenance in Hyderabad. We specialize in bringing complex engineering designs to life.
              </p>
              <div className="space-y-4">
                {['Industrial Crusher Maintenance', 'Custom Metal Fabrication', 'Precision Machine Parts'].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-white font-medium">
                    <CheckCircle className="text-yellow-500" /> {item}
                  </div>
                ))}
              </div>
              <Link href="/about" className="inline-block mt-10">
                <Button variant="link" className="text-yellow-500 p-0 text-lg font-bold group">
                  Learn more about us <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" />
                </Button>
              </Link>
            </motion.div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img src="/images/projects/Vibrating-Screen.jpeg" className="rounded-2xl border border-white/5 shadow-2xl" alt="Work" />
                <div className="p-6 bg-yellow-500 rounded-2xl text-black">
                  <div className="text-3xl font-bold">20+</div>
                  <div className="font-bold text-sm uppercase">Years</div>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="p-6 bg-zinc-800 rounded-2xl text-white border border-white/5">
                  <div className="text-3xl font-bold text-yellow-500">300+</div>
                  <div className="text-sm text-gray-400">Projects</div>
                </div>
                <img src="/images/projects/Berings.jpeg" className="rounded-2xl border border-white/5 shadow-2xl" alt="Work" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">Key Services</h2>
            <p className="text-gray-400">Precision and quality in every project.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredServices.map((s, i) => (
              <motion.div key={i} {...fadeIn} transition={{ delay: i * 0.1 }}>
                <Card className="bg-zinc-900 border-zinc-800 h-full hover:border-yellow-500 transition-all group">
                  <CardContent className="p-8">
                    <div className="text-yellow-500 mb-6 group-hover:scale-110 transition-transform">{s.icon}</div>
                    <h3 className="text-xl font-bold text-white mb-3">{s.title}</h3>
                    <p className="text-gray-400 text-sm mb-6 leading-relaxed">{s.desc}</p>
                    <Link href="/services">
                      <Button variant="outline" size="sm" className="border-zinc-700 text-gray-400 hover:text-yellow-500 hover:border-yellow-500">
                        View Details
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 bg-yellow-500">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-black mb-8">Ready to start your industrial project?</h2>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-black text-white hover:bg-zinc-800 px-12 py-8 text-xl">
                Get a Free Quote
              </Button>
            </Link>
            <Link href="/gallery">
              <Button size="lg" className="bg-black text-white hover:bg-zinc-800 px-12 py-8 text-xl border-none">
                View Our Projects
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
