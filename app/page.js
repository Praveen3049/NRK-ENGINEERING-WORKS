'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { 
  MessageCircle, ArrowRight, Wrench, Shield, Clock, Award, 
  Users, Target, CheckCircle, Phone, Mail, 
  MapPin, Send, Home as HomeIcon, MoveVertical, Warehouse, Factory, X
} from 'lucide-react'

export default function Home() {
  const [isVisible, setIsVisible] = useState(false)
  const [selectedImage, setSelectedImage] = useState(null)
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', message: '' })
  const [formStatus, setFormStatus] = useState({ type: '', message: '' })
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    
    const message = `Hello NRK-ENG-WORKS! I would like to request a quote.
*Name:* ${formData.name}
*Phone:* ${formData.phone}
*Email:* ${formData.email || 'Not provided'}
*Message:* ${formData.message}`

    const encodedMessage = encodeURIComponent(message)
    const whatsappNumber = "918500193091"
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`

    setFormStatus({ type: 'success', message: 'Opening WhatsApp...' })

    setTimeout(() => {
      window.open(whatsappUrl, '_blank')
      setFormData({ name: '', phone: '', email: '', message: '' })
      setLoading(false)
      setFormStatus({ type: '', message: '' })
    }, 1000)
  }

  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.8, ease: "easeOut" }
  }

  const staggerContainer = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: true },
    transition: { staggerChildren: 0.2 }
  }

  const services = [
    {
      title: 'Steel Structure Fabrication',
      description: 'Custom-designed structures for Crushers Manufacturer and Spare Parts & Maintenance',
      image: '/images/projects/logo.png',
      icon: <Shield className="w-12 h-12" />,
      features: ['Custom designs', 'Heavy-duty Fabrication', 'Pipelining systems']
    },
    {
      title: 'Crushers Manufacturer',
      description: 'Vibrating-Screens, Grizzly-Feeders, Jaw-Crusher Maintenance, Steel Ramps, Conveyor-Systems, Roller-Frames and Crusher-Parts',
      image: '/images/projects/Vibrating-Screen.jpeg',
      icon: <HomeIcon className="w-12 h-12" />,
      features: ['Welding-Systems', 'Skill-Hard Works', 'Heavy-Duty Fabrication']
    },
    {
      title: 'Sand Washing Plants',
      description: 'Custom sand washing solutions for construction and mining industries',
      image: '/images/projects/industriyal plant.jpeg',
      icon: <MoveVertical className="w-12 h-12" />,
      features: ['Indoor/Outdoor', 'Hydrocyclone', 'Custom finishes']
    },
    {
      title: 'Industrial Fabrication',
      description: 'Heavy-duty fabrication for industrial applications',
      image: '/images/projects/Rollers.jpeg',
      icon: <Factory className="w-12 h-12" />,
      features: ['Structural steel', 'Certified welding', 'Precision engineering']
    }
  ]

  const galleryItems = [
    { image: '/images/projects/Berings.jpeg', title: 'High-Quality Bearings', category: 'Spare Parts' },
    { image: '/images/projects/Cotten-Soft.jpeg', title: 'Cotton Soft Components', category: 'Spare Parts' },
    { image: '/images/projects/Radiator.jpeg', title: 'Industrial Radiator', category: 'Spare Parts' },
    { image: '/images/projects/Rollers.jpeg', title: 'Heavy Duty Rollers', category: 'Spare Parts' },
    { image: '/images/projects/Vibrate-Moters.jpeg', title: 'Vibrating Motors', category: 'Spare Parts' },
    { image: '/images/projects/Conveyors.jpeg', title: 'Conveyor-Belt', category: 'Conveyors' },
    { image: '/images/projects/Conveyors_1.jpeg', title: 'Conveyor-Frames', category: 'Conveyors' },
    { image: '/images/projects/Vibrating-Screen.jpeg', title: 'Vibrating Screen', category: 'Vibrating Screens' },
    { image: '/images/projects/Vibrating-Screen 2.jpeg', title: 'Grizzly-Feeders', category: 'Vibrating Screens' },
    { image: '/images/projects/Vibrating-Screen 3.jpeg', title: 'Pan-Feeders', category: 'Vibrating Screens' },
    { image: '/images/projects/industriyal plant.jpeg', title: 'Cyclone Sand Washing Plant', category: 'Industrial Plants' }
  ]

  const filteredGallery = selectedCategory === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory)

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/6036672/pexels-photo-6036672.jpeg"
            alt="NRK-ENG-WORKS"
            loading="lazy"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black"></div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center px-4"
        >
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-display font-bold text-white mb-6 tracking-tight break-words">
            NRK-ENGINEERING-WORKS
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 font-light">
            Custom Engineering & Fabrication
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#gallery">
              <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-6 text-lg">
                View Our Work <ArrowRight className="ml-2" />
              </Button>
            </Link>
            <Link href="#quote">
              <Button size="lg" variant="outline" className="border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black px-8 py-6 text-lg">
                Get a Quote
              </Button>
            </Link>
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-4 bg-zinc-900 border-b border-zinc-800">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeIn}>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-400 text-lg leading-relaxed">
                <p>
                  With over 20 years of experience in the engineering and fabrication industry, we have established ourselves 
                  as a trusted name in custom engineering and metalwork.
                </p>
                <p>
                  We combine traditional welding techniques with modern fabrication technology to deliver products that 
                  are not only functional but also aesthetically pleasing.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6 mt-12">
                <div className="group p-6 bg-white/5 rounded-2xl border border-white/10 hover:border-yellow-500/50 transition-all duration-300">
                  <div className="w-12 h-12 bg-yellow-500/10 rounded-full flex items-center justify-center text-yellow-500 mb-4 group-hover:scale-110 transition-transform">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div className="text-4xl font-display font-bold text-white mb-1">20+</div>
                  <div className="text-gray-400 text-sm font-medium uppercase tracking-wider">Years Experience</div>
                </div>
                <div className="group p-6 bg-white/5 rounded-2xl border border-white/10 hover:border-yellow-500/50 transition-all duration-300">
                  <div className="w-12 h-12 bg-yellow-500/10 rounded-full flex items-center justify-center text-yellow-500 mb-4 group-hover:scale-110 transition-transform">
                    <Award className="w-6 h-6" />
                  </div>
                  <div className="text-4xl font-display font-bold text-white mb-1">300+</div>
                  <div className="text-gray-400 text-sm font-medium uppercase tracking-wider">Projects Done</div>
                </div>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1"
                alt="Workshop"
                loading="lazy"
                className="rounded-lg shadow-2xl border border-zinc-700"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">Our Services</h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Comprehensive engineering and fabrication services tailored to your needs
            </p>
          </motion.div>
          
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {services.map((service, index) => (
              <motion.div key={index} variants={fadeIn}>
                <Card className="bg-zinc-900/50 border-zinc-800 hover:border-yellow-500/50 hover:shadow-[0_0_30px_-10px_rgba(234,179,8,0.3)] transition-all duration-500 h-full group hover:-translate-y-3">
                  <CardContent className="p-6">
                    <div className="text-yellow-500 mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">{service.icon}</div>
                    <h3 className="text-xl font-display font-bold text-white mb-3 group-hover:text-yellow-500 transition-colors duration-300">{service.title}</h3>
                    <p className="text-gray-400 mb-6 text-sm leading-relaxed">{service.description}</p>
                    <ul className="space-y-3">
                      {service.features.map((f, i) => (
                        <li key={i} className="text-gray-500 text-xs flex items-center gap-2 group-hover:text-gray-300 transition-colors duration-300">
                          <CheckCircle className="w-3 h-3 text-yellow-500" /> {f}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-24 px-4 bg-zinc-900">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">Our Work</h2>
            <div className="flex flex-wrap gap-2 justify-center mt-8">
              {['All', 'Industrial Plants', 'Conveyors', 'Spare Parts', 'Vibrating Screens'].map(cat => (
                <Button 
                  key={cat}
                  variant={selectedCategory === cat ? "default" : "outline"}
                  className={selectedCategory === cat ? "bg-yellow-500 text-black hover:bg-yellow-600" : "border-zinc-700 text-gray-400 hover:border-yellow-500"}
                  onClick={() => setSelectedCategory(cat)}
                >
                  {cat}
                </Button>
              ))}
            </div>
          </motion.div>

          <motion.div 
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredGallery.map((item, index) => (
              <motion.div 
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                key={index} 
                className="group relative aspect-square overflow-hidden rounded-xl cursor-pointer ring-1 ring-white/10 hover:ring-yellow-500/50 transition-all duration-500"
                onClick={() => setSelectedImage(item)}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8 translate-y-4 group-hover:translate-y-0">
                  <p className="text-yellow-500 text-xs font-bold uppercase tracking-[0.2em] mb-2">{item.category}</p>
                  <h3 className="text-white font-display font-bold text-2xl">{item.title}</h3>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Quote Section */}
      <section id="quote" className="py-24 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div {...fadeIn}>
              <h2 className="text-4xl font-display font-bold text-white mb-6">Request a Free Quote</h2>
              <p className="text-gray-400 mb-8 text-lg">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>

              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white mb-2 font-semibold text-sm">Name *</label>
                    <Input name="name" value={formData.name} onChange={handleFormChange} required className="bg-zinc-900 border-zinc-800 text-white h-12 focus:ring-yellow-500" placeholder="Your Name" />
                  </div>
                  <div>
                    <label className="block text-white mb-2 font-semibold text-sm">Phone *</label>
                    <Input name="phone" value={formData.phone} onChange={handleFormChange} required className="bg-zinc-900 border-zinc-800 text-white h-12 focus:ring-yellow-500" placeholder="Phone Number" />
                  </div>
                </div>
                <div>
                  <label className="block text-white mb-2 font-semibold text-sm">Email</label>
                  <Input name="email" value={formData.email} onChange={handleFormChange} className="bg-zinc-900 border-zinc-800 text-white h-12 focus:ring-yellow-500" placeholder="Your Email" />
                </div>
                <div>
                  <label className="block text-white mb-2 font-semibold text-sm">Message *</label>
                  <Textarea name="message" value={formData.message} onChange={handleFormChange} required rows={6} className="bg-zinc-900 border-zinc-800 text-white focus:ring-yellow-500" placeholder="Tell us about your project..." />
                </div>
                {formStatus.message && (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className={`p-4 rounded-lg ${formStatus.type === 'success' ? 'bg-green-500/20 text-green-500 border border-green-500' : 'bg-red-500/20 text-red-500 border border-red-500'}`}
                  >
                    {formStatus.message}
                  </motion.div>
                )}
                <Button type="submit" disabled={loading} className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-6 text-lg transition-all duration-300">
                  {loading ? 'Sending...' : 'Request Free Quote'} <Send className="ml-2 w-5 h-5" />
                </Button>
              </form>
            </motion.div>

            <motion.div 
              {...fadeIn}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="space-y-8"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { icon: <Phone />, title: 'Phone', content: ['+91 8500193091', '+91 7396881999'] },
                  { icon: <Mail />, title: 'Email', content: ['nrkengworkshyd@gmail.com'] },
                  { icon: <MapPin />, title: 'Location', content: ['Kaziguda, Kompally', 'Hyderabad, Telangana'] },
                  { icon: <Clock />, title: 'Hours', content: ['Mon-Sat: 8AM-6PM'] },
                ].map((item, i) => (
                  <Card key={i} className="bg-zinc-900/50 border-zinc-800 hover:border-yellow-500/50 hover:shadow-[0_0_20px_-10px_rgba(234,179,8,0.2)] transition-all duration-500 group overflow-hidden">
                    <CardContent className="p-6 flex items-start gap-4">
                      <div className="text-yellow-500 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500">{item.icon}</div>
                      <div>
                        <h3 className="text-white font-display font-bold mb-1 text-sm group-hover:text-yellow-500 transition-colors duration-300">{item.title}</h3>
                        {item.content.map((line, j) => (
                          <p key={j} className="text-gray-400 text-xs">{line}</p>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="rounded-lg overflow-hidden border border-zinc-800 bg-zinc-900/50 p-6 flex flex-col items-center justify-center">
                <h3 className="text-white font-bold mb-6 flex items-center gap-2">
                  <Award className="w-5 h-5 text-yellow-500" /> Digital Visiting Card
                </h3>
                <div className="relative group overflow-hidden rounded shadow-2xl">
                  <img 
                    src="/images/projects/Visiting-Card.jpeg" 
                    alt="NRK Engineering Works Visiting Card" 
                    className="w-full h-auto border border-white/10 group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <a 
                  href="/images/projects/Visiting-Card.jpeg" 
                  download 
                  className="mt-8 inline-flex items-center gap-2 bg-white/5 hover:bg-yellow-500 hover:text-black px-6 py-3 rounded-full text-yellow-500 font-bold text-sm transition-all duration-300"
                >
                  Download Contact Card <Send className="w-4 h-4 rotate-45" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/95 z-[100] flex items-center justify-center p-4 backdrop-blur-sm" onClick={() => setSelectedImage(null)}>
          <button className="absolute top-8 right-8 text-white hover:text-yellow-500 transition-colors"><X className="w-10 h-10" /></button>
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="max-w-5xl w-full" 
            onClick={e => e.stopPropagation()}
          >
            <img src={selectedImage.image} alt={selectedImage.title} className="w-full h-auto max-h-[80vh] object-contain rounded-lg shadow-2xl" />
            <h3 className="text-white text-2xl font-display font-bold mt-6 text-center">{selectedImage.title}</h3>
            <p className="text-yellow-500 text-center uppercase tracking-widest mt-2 font-bold">{selectedImage.category}</p>
          </motion.div>
        </div>
      )}
    </div>
  )
}
