'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent } from '@/components/ui/card'
import { Phone, Mail, MapPin, Clock, Send, MessageCircle, Award } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', message: '' })
  const [loading, setLoading] = useState(false)

  const handleFormSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    
    const message = `Hello NRK Engineering Works! I would like to request a quote.
*Name:* ${formData.name}
*Phone:* ${formData.phone}
*Email:* ${formData.email || 'Not provided'}
*Message:* ${formData.message}`

    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/918500193091?text=${encodedMessage}`

    setTimeout(() => {
      window.open(whatsappUrl, '_blank')
      setLoading(false)
    }, 1000)
  }

  return (
    <div className="bg-black min-h-screen pb-24">
      {/* Header */}
      <section className="py-24 px-4 bg-zinc-900/50 border-b border-zinc-800">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-display font-bold text-white mb-6"
          >
            Contact Us
          </motion.h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Get in touch with NRK Engineering Works for the best welding, fabrication, and machining services in Hyderabad.
          </p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Form */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-display font-bold text-white mb-8">Request a Free Quote</h2>
              <form onSubmit={handleFormSubmit} className="space-y-6 bg-zinc-900/50 p-8 rounded-3xl border border-white/5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-400 uppercase tracking-widest">Name *</label>
                    <Input 
                      required 
                      placeholder="Your Name" 
                      className="bg-black border-zinc-800 h-14 text-white focus:ring-yellow-500"
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-400 uppercase tracking-widest">Phone *</label>
                    <Input 
                      required 
                      placeholder="Phone Number" 
                      className="bg-black border-zinc-800 h-14 text-white focus:ring-yellow-500"
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-400 uppercase tracking-widest">Email</label>
                  <Input 
                    type="email" 
                    placeholder="Your Email" 
                    className="bg-black border-zinc-800 h-14 text-white focus:ring-yellow-500"
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-400 uppercase tracking-widest">Requirement *</label>
                  <Textarea 
                    required 
                    placeholder="Tell us about your project..." 
                    className="bg-black border-zinc-800 text-white focus:ring-yellow-500 min-h-[150px]"
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  />
                </div>
                <Button type="submit" disabled={loading} className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-8 text-xl">
                  {loading ? 'Processing...' : 'Send to WhatsApp'} <MessageCircle className="ml-2" />
                </Button>
              </form>
            </motion.div>

            {/* Info */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="text-3xl font-display font-bold text-white mb-8">Our Location</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { icon: <Phone />, title: 'Call Us', content: ['+91 8500193091', '+91 7396881999'] },
                  { icon: <Mail />, title: 'Email Us', content: ['nrkengworkshyd@gmail.com'] },
                  { icon: <MapPin />, title: 'Visit Us', content: ['Near Jaibery colony, Kompally', 'Hyderabad, Telangana 500100'] },
                  { icon: <Clock />, title: 'Hours', content: ['Mon-Sat: 8AM - 6PM'] }
                ].map((item, i) => (
                  <Card key={i} className="bg-zinc-900/50 border-zinc-800 group hover:border-yellow-500/50 transition-all">
                    <CardContent className="p-6">
                      <div className="text-yellow-500 mb-4 group-hover:scale-110 transition-transform">{item.icon}</div>
                      <h3 className="text-white font-bold mb-2">{item.title}</h3>
                      {item.content.map((text, j) => (
                        <p key={j} className="text-gray-400 text-sm">{text}</p>
                      ))}
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Maps Embed */}
              <div className="rounded-3xl overflow-hidden border border-zinc-800 h-[300px] grayscale hover:grayscale-0 transition-all duration-700">
                <iframe
                  src="https://maps.google.com/maps?q=17.5411469,78.4682495&z=15&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                ></iframe>
              </div>

              {/* Visiting Card */}
              <div className="p-8 bg-zinc-900 rounded-3xl border border-zinc-800 flex flex-col items-center">
                <h3 className="text-white font-bold mb-6 flex items-center gap-2 uppercase tracking-tighter">
                  <Award className="text-yellow-500" /> Digital Visiting Card
                </h3>
                <img src="/images/projects/Visiting-Card.jpeg" alt="NRK Visiting Card" className="rounded-xl shadow-2xl mb-6 w-full" />
                <a href="/images/projects/Visiting-Card.jpeg" download className="text-yellow-500 font-bold hover:underline">
                  Download Visiting Card
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
