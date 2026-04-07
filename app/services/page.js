'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Shield, Home as HomeIcon, MoveVertical, Factory, Wrench, CheckCircle, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Services() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 }
  }

  const detailedServices = [
    {
      title: 'Welding Services',
      description: 'Expert welding services including ARC, MIG, and TIG welding. We specialize in high-strength structural welding and precision joins for industrial and commercial projects. Our welders are highly skilled in handling various metals with focus on durability and structural integrity.',
      image: '/images/projects/Vibrating-Screen.jpeg',
      icon: <Shield className="w-12 h-12" />,
      features: ['ARC, MIG & TIG Welding', 'Structural Steel Welding', 'Precision Metal Joining', 'On-site Welding Services']
    },
    {
      title: 'Steel Fabrication',
      description: 'Custom steel fabrication for structural frameworks, supports, and heavy-duty industrial components. We bring your technical drawings to life with precision and durability. From simple brackets to complex industrial structures, we provide end-to-end fabrication solutions.',
      image: '/images/projects/industriyal plant.jpeg',
      icon: <HomeIcon className="w-12 h-12" />,
      features: ['Custom Industrial Frameworks', 'Heavy-duty Metal Building', 'Precision Cutting & Bending', 'Structural Steel Installation']
    },
    {
      title: 'Lathe & Machining Work',
      description: 'High-precision machining and lathe work for industrial spare parts. We provide turning, milling, and custom component manufacturing with tight tolerances. Our machine shop is equipped to handle complex parts manufacturing for various industrial sectors.',
      image: '/images/projects/Berings.jpeg',
      icon: <MoveVertical className="w-12 h-12" />,
      features: ['Precision Turning & Milling', 'Custom Spare Parts Manufacturing', 'Tight Tolerance Machining', 'Component Refurbishment']
    },
    {
      title: 'Crusher Maintenance',
      description: 'Specialized maintenance and repair services for industrial crushers. We handle part replacements, structural reinforcement, and complete machine overhauls. Our expertise ensures your crushing equipment operates at peak efficiency with minimal downtime.',
      image: '/images/projects/Rollers.jpeg',
      icon: <Factory className="w-12 h-12" />,
      features: ['Grizzly Feeder Maintenance', 'Vibrating Screen Repair', 'Jaw-Crusher Component Care', 'Complete Machine Overhaul']
    },
    {
      title: 'Industrial Repairs',
      description: 'On-site and off-site repair services for heavy machinery and metal structures. Our team ensures minimal downtime for your industrial operations through rapid response and reliable repair techniques for all types of metal equipment.',
      image: '/images/projects/Vibrate-Moters.jpeg',
      icon: <Wrench className="w-12 h-12" />,
      features: ['24/7 Emergency Repairs', 'Heavy Equipment Refurbishment', 'On-site Structural Repairs', 'Preventive Maintenance']
    }
  ]

  return (
    <div className="bg-black min-h-screen">
      {/* Page Header */}
      <section className="relative py-24 px-4 border-b border-zinc-800 bg-zinc-900/50">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-display font-bold text-white mb-6"
          >
            Our Expert Services
          </motion.h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Comprehensive engineering and fabrication solutions in Hyderabad, tailored to your industrial and commercial needs.
          </p>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto space-y-32">
          {detailedServices.map((service, index) => (
            <motion.div 
              key={index} 
              {...fadeIn}
              className={`flex flex-col lg:flex-row items-center gap-12 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
            >
              <div className="flex-1 space-y-6">
                <div className="text-yellow-500">{service.icon}</div>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-white">{service.title}</h2>
                <p className="text-lg text-gray-400 leading-relaxed">
                  {service.description}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.features.map((feat, i) => (
                    <div key={i} className="flex items-center gap-2 text-gray-300">
                      <CheckCircle className="w-5 h-5 text-yellow-500" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
                <Link href="/contact" className="inline-block pt-4">
                  <Button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-8 py-6">
                    Request Quote for {service.title}
                  </Button>
                </Link>
              </div>
              <div className="flex-1 w-full relative group">
                <div className="absolute -inset-4 bg-yellow-500/10 rounded-2xl blur-2xl group-hover:bg-yellow-500/20 transition-all duration-500"></div>
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="relative rounded-2xl shadow-2xl border border-zinc-800 w-full h-[400px] object-cover"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-zinc-900 border-t border-zinc-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-8">Need a Custom Engineering Solution?</h2>
          <p className="text-xl text-gray-400 mb-12">Our team is ready to handle your most complex fabrication and machining requirements.</p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-12 py-8 text-xl">
                Get a Free Quote
              </Button>
            </Link>
            <a href="tel:+918500193091">
              <Button size="lg" variant="outline" className="border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black px-12 py-8 text-xl">
                Call Us Now
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
