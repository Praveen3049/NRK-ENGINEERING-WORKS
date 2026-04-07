'use client'

import { motion } from 'framer-motion'
import { Shield, Clock, Award, Target, Users, CheckCircle } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function About() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 }
  }

  return (
    <div className="bg-black min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1"
            alt="About NRK Engineering Works"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black"></div>
        </div>
        <div className="relative z-10 text-center px-4">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-4xl md:text-7xl font-display font-bold text-white mb-6"
          >
            Our Story
          </motion.h1>
          <p className="text-xl text-yellow-500 font-medium uppercase tracking-widest">
            Engineering Excellence Since 2000
          </p>
        </div>
      </section>

      {/* History Section */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeIn}>
              <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-8">20+ Years of Experience</h2>
              <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
                <p>
                  NRK Engineering Works has been a cornerstone of the fabrication and machining industry in Hyderabad for over two decades. 
                  Founded with a vision to provide high-quality metalwork solutions, we have grown from a small workshop into a trusted 
                  partner for industrial and commercial clients across the region.
                </p>
                <p>
                  Our expertise lies in understanding the complex requirements of heavy machinery and structural engineering. 
                  We take pride in our ability to deliver precision-engineered components that withstand the toughest industrial environments.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6 mt-12">
                <div className="p-6 bg-zinc-900 rounded-2xl border border-zinc-800">
                  <div className="text-4xl font-bold text-yellow-500 mb-2">300+</div>
                  <div className="text-sm text-gray-500 uppercase font-bold tracking-wider">Successful Projects</div>
                </div>
                <div className="p-6 bg-zinc-900 rounded-2xl border border-zinc-800">
                  <div className="text-4xl font-bold text-yellow-500 mb-2">100%</div>
                  <div className="text-sm text-gray-500 uppercase font-bold tracking-wider">Quality Assured</div>
                </div>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative rounded-2xl overflow-hidden shadow-2xl border border-zinc-800"
            >
              <img src="/images/projects/industriyal plant.jpeg" alt="NRK Workshop" className="w-full h-full object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-24 px-4 bg-zinc-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">Mission & Commitment</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Driven by quality, powered by engineering precision.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <Target className="w-10 h-10" />, title: "Our Mission", text: "To provide world-class engineering and fabrication services that empower local industries through precision and reliability." },
              { icon: <Shield className="w-10 h-10" />, title: "Quality First", text: "We never compromise on materials or workmanship. Every weld and every cut follows strict quality standards." },
              { icon: <Users className="w-10 h-10" />, title: "Client Focused", text: "Building long-term relationships through transparent communication, on-time delivery, and exceptional service." }
            ].map((v, i) => (
              <motion.div 
                key={i} 
                {...fadeIn} 
                transition={{ delay: i * 0.2 }}
                className="p-8 bg-black rounded-2xl border border-zinc-800 hover:border-yellow-500/50 transition-all group"
              >
                <div className="text-yellow-500 mb-6 group-hover:scale-110 transition-transform">{v.icon}</div>
                <h3 className="text-2xl font-display font-bold text-white mb-4">{v.title}</h3>
                <p className="text-gray-400 leading-relaxed">{v.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-display font-bold text-white mb-8">Ready to work with an industry expert?</h2>
          <Link href="/contact">
            <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-12 py-8 text-xl">
              Connect With Us
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
