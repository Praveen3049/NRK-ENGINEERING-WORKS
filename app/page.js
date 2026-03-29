'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
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
    
    // 1. Prepare WhatsApp Message directly (No Database needed)
    const message = `Hello NRK-ENG-WORKS! I would like to request a quote.
*Name:* ${formData.name}
*Phone:* ${formData.phone}
*Email:* ${formData.email || 'Not provided'}
*Message:* ${formData.message}`

    const encodedMessage = encodeURIComponent(message)
    const whatsappNumber = "918500193091"
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`

    setFormStatus({ type: 'success', message: 'Opening WhatsApp...' })

    // 2. Redirect to WhatsApp
    setTimeout(() => {
      window.open(whatsappUrl, '_blank')
      setFormData({ name: '', phone: '', email: '', message: '' })
      setLoading(false)
      setFormStatus({ type: '', message: '' })
    }, 1000)
  }

  const services = [
    {
      title: 'Steel Structure Fabrication',
      description: 'Custom-designed structures for Crushers Manufacturer and Spare Parts & Maintanance',
      image: 'https://images.unsplash.com/photo-1753596726704-5c4bd0357742',
      icon: <Shield className="w-12 h-12" />,
      features: ['Custom designs', 'Heavy-duty Fabrication', 'Pipelining systems']
    },
    {
      title: 'Crushers Manufacturer',
      description: 'Vibrating-Screens,Grizzly-Feeders,Jaw-Crusher Maintanance,Vibrating-Feeder,Supporting Structures,Steel Ramps,Conveyor-Systems,Roller-Frames and Crusher-Parts',
      image: 'https://images.unsplash.com/photo-1635348180022-2f7715fdecfa',
      icon: <HomeIcon className="w-12 h-12" />,
      features: ['Welding-Systems', 'Skill-Hard Works', 'Heavy-Duty Fabrication']
    },
    {
      title: 'Sand Washing Plants',
      description: 'Custom sand washing solutions for construction and mining industries',
      image: 'https://images.unsplash.com/photo-1766939366592-af594b7c251f',
      icon: <MoveVertical className="w-12 h-12" />,
      features: ['Indoor/Outdoor', 'Hydrocyclone', 'Custom finishes']
    },
    {
      title: 'Industrial Fabrication',
      description: 'Heavy-duty fabrication for industrial applications',
      image: 'https://images.pexels.com/photos/29842696/pexels-photo-29842696.jpeg',
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
        
        <div className={`relative z-10 text-center px-4 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
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
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-4 bg-zinc-900 border-b border-zinc-800">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Story</h2>
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
              <div className="grid grid-cols-2 gap-8 mt-12">
                <div className="text-center p-6 bg-black/30 rounded-lg">
                  <div className="text-4xl font-bold text-yellow-500 mb-2">20+</div>
                  <div className="text-gray-400">Years Experience</div>
                </div>
                <div className="text-center p-6 bg-black/30 rounded-lg">
                  <div className="text-4xl font-bold text-yellow-500 mb-2">300+</div>
                  <div className="text-gray-400">Projects Done</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1"
                alt="Workshop"
                loading="lazy"
                className="rounded-lg shadow-2xl border border-zinc-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Services</h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Comprehensive engineering and fabrication services tailored to your needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="bg-zinc-900 border-zinc-800 hover:border-yellow-500 transition-all">
                <CardContent className="p-6">
                  <div className="text-yellow-500 mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-400 mb-4 text-sm">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((f, i) => (
                      <li key={i} className="text-gray-500 text-xs flex items-center gap-2">
                        <CheckCircle className="w-3 h-3 text-yellow-500" /> {f}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-24 px-4 bg-zinc-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Work</h2>
            <div className="flex flex-wrap gap-2 justify-center mt-8">
              {['All', 'Industrial Plants', 'Conveyors', 'Spare Parts', 'Vibrating Screens'].map(cat => (
                <Button 
                  key={cat}
                  variant={selectedCategory === cat ? "default" : "outline"}
                  className={selectedCategory === cat ? "bg-yellow-500 text-black" : "border-zinc-700 text-gray-400"}
                  onClick={() => setSelectedCategory(cat)}
                >
                  {cat}
                </Button>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredGallery.map((item, index) => (
              <div 
                key={index} 
                className="group relative aspect-square overflow-hidden rounded-lg cursor-pointer"
                onClick={() => setSelectedImage(item)}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
                  <p className="text-yellow-500 text-sm">{item.category}</p>
                  <h3 className="text-white font-bold">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section id="quote" className="py-24 px-4 bg-zinc-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form Side */}
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">Request a Free Quote</h2>
              <p className="text-gray-400 mb-8 text-lg">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>

              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white mb-2 font-semibold">Name *</label>
                    <Input name="name" value={formData.name} onChange={handleFormChange} required className="bg-zinc-800 border-zinc-700 text-white h-12" placeholder="Your Name" />
                  </div>
                  <div>
                    <label className="block text-white mb-2 font-semibold">Phone *</label>
                    <Input name="phone" value={formData.phone} onChange={handleFormChange} required className="bg-zinc-800 border-zinc-700 text-white h-12" placeholder="Phone Number" />
                  </div>
                </div>
                <div>
                  <label className="block text-white mb-2 font-semibold">Email</label>
                  <Input name="email" value={formData.email} onChange={handleFormChange} className="bg-zinc-800 border-zinc-700 text-white h-12" placeholder="Your Email" />
                </div>
                <div>
                  <label className="block text-white mb-2 font-semibold">Message *</label>
                  <Textarea name="message" value={formData.message} onChange={handleFormChange} required rows={6} className="bg-zinc-800 border-zinc-700 text-white" placeholder="Tell us about your project..." />
                </div>
                {formStatus.message && (
                  <div className={`p-4 rounded-lg ${formStatus.type === 'success' ? 'bg-green-500/20 text-green-500 border border-green-500' : 'bg-red-500/20 text-red-500 border border-red-500'}`}>
                    {formStatus.message}
                  </div>
                )}
                <Button type="submit" disabled={loading} className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-6 text-lg">
                  {loading ? 'Sending...' : 'Request Free Quote'} <Send className="ml-2 w-5 h-5" />
                </Button>
              </form>
            </div>

            {/* Info and Map Side */}
            <div className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card className="bg-zinc-800 border-zinc-700 hover:border-yellow-500 transition-all">
                  <CardContent className="p-6 flex items-start gap-4">
                    <Phone className="w-6 h-6 text-yellow-500 shrink-0 mt-1" />
                    <div>
                      <h3 className="text-white font-bold mb-1">Phone</h3>
                      <p className="text-gray-400 text-sm">+91 8500193091</p>
                      <p className="text-gray-400 text-sm">+91 7396881999</p>
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-zinc-800 border-zinc-700 hover:border-yellow-500 transition-all">
                  <CardContent className="p-6 flex items-start gap-4">
                    <Mail className="w-6 h-6 text-yellow-500 shrink-0 mt-1" />
                    <div>
                      <h3 className="text-white font-bold mb-1">Email</h3>
                      <p className="text-gray-400 text-sm">nrkengworkshyd@gmail.com </p>
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-zinc-800 border-zinc-700 hover:border-yellow-500 transition-all">
                  <CardContent className="p-6 flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-yellow-500 shrink-0 mt-1" />
                    <div>
                      <h3 className="text-white font-bold mb-1">Location</h3>
                      <p className="text-gray-400 text-sm">Near Jaibery colony,Kompally,Hyderabad,</p>
                      <p className="text-gray-400 text-sm">Kaziguda,Telangana,500100</p>
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-zinc-800 border-zinc-700 hover:border-yellow-500 transition-all">
                  <CardContent className="p-6 flex items-start gap-4">
                    <Clock className="w-6 h-6 text-yellow-500 shrink-0 mt-1" />
                    <div>
                      <h3 className="text-white font-bold mb-1">Hours</h3>
                      <p className="text-gray-400 text-sm">Mon-Sat: 8AM-6PM</p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="rounded-lg overflow-hidden border border-zinc-700 bg-black/40 p-4 flex flex-col items-center justify-center">
                <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                  <Award className="w-5 h-5 text-yellow-500" /> Digital Visiting Card
                </h3>
                <img 
                  src="/images/projects/Visiting-Card.jpeg" 
                  alt="NRK Engineering Works Visiting Card" 
                  className="w-full h-auto rounded shadow-2xl border border-zinc-800"
                />
                <a 
                  href="/images/projects/Visiting-Card.jpeg" 
                  download 
                  className="mt-6 inline-flex items-center gap-2 text-yellow-500 hover:text-yellow-400 font-semibold text-sm transition-colors"
                >
                  Download Contact Card <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/95 z-[100] flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
          <button className="absolute top-8 right-8 text-white hover:text-yellow-500"><X className="w-10 h-10" /></button>
          <div className="max-w-5xl w-full" onClick={e => e.stopPropagation()}>
            <img src={selectedImage.image} alt={selectedImage.title} className="w-full h-auto max-h-[80vh] object-contain" />
            <h3 className="text-white text-2xl font-bold mt-6 text-center">{selectedImage.title}</h3>
          </div>
        </div>
      )}
    </div>
  )
}
