'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Award, Search, Filter } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null)
  const [selectedCategory, setSelectedCategory] = useState('All')

  const galleryItems = [
    { image: '/images/projects/Berings.jpeg', title: 'Industrial Bearings Replacement', category: 'Spare Parts', desc: 'Precision fitting of high-load bearings for crusher equipment.' },
    { image: '/images/projects/Cotten-Soft.jpeg', title: 'Custom Component Fabrication', category: 'Spare Parts', desc: 'Fabrication of specialized soft-joint components for industrial machinery.' },
    { image: '/images/projects/Radiator.jpeg', title: 'Heavy Duty Radiator Repair', category: 'Spare Parts', desc: 'Refurbishment and pressure testing of industrial cooling systems.' },
    { image: '/images/projects/Rollers.jpeg', title: 'Conveyor Roller Manufacturing', category: 'Spare Parts', desc: 'Custom lathe-turned rollers for heavy-duty conveyor systems.' },
    { image: '/images/projects/Vibrate-Moters.jpeg', title: 'Vibrating Motor Assembly', category: 'Spare Parts', desc: 'Installation and alignment of heavy-duty vibrating motors.' },
    { image: '/images/projects/Conveyors.jpeg', title: 'Belt Conveyor System', category: 'Conveyors', desc: 'Complete fabrication and assembly of a 50-meter belt conveyor.' },
    { image: '/images/projects/Conveyors_1.jpeg', title: 'Structural Conveyor Frames', category: 'Conveyors', desc: 'Heavy-duty steel frames for mining-grade conveyor systems.' },
    { image: '/images/projects/Vibrating-Screen.jpeg', title: 'Custom Vibrating Screen', category: 'Vibrating Screens', desc: 'Multi-deck vibrating screen fabricated for sand washing plants.' },
    { image: '/images/projects/Vibrating-Screen 2.jpeg', title: 'Grizzly Feeder Fabrication', category: 'Vibrating Screens', desc: 'Heavy-duty grizzly feeder for primary crushing stage.' },
    { image: '/images/projects/Vibrating-Screen 3.jpeg', title: 'Precision Pan Feeder', category: 'Vibrating Screens', desc: 'Custom engineered pan feeder for controlled material flow.' },
    { image: '/images/projects/industriyal plant.jpeg', title: 'Industrial Sand Washing Plant', category: 'Industrial Plants', desc: 'Turnkey fabrication and installation of a complete sand processing facility.' }
  ]

  const categories = ['All', 'Industrial Plants', 'Conveyors', 'Spare Parts', 'Vibrating Screens']

  const filteredItems = selectedCategory === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory)

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
            Our Projects
          </motion.h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-12">
            A showcase of our precision engineering and high-quality fabrication work delivered across Hyderabad.
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map(cat => (
              <Button 
                key={cat}
                variant={selectedCategory === cat ? "default" : "outline"}
                onClick={() => setSelectedCategory(cat)}
                className={`${selectedCategory === cat ? 'bg-yellow-500 text-black' : 'border-zinc-700 text-gray-400 hover:border-yellow-500'} transition-all`}
              >
                {cat}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence>
              {filteredItems.map((item, index) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  key={item.title}
                  className="group relative aspect-[4/5] overflow-hidden rounded-2xl cursor-pointer bg-zinc-900 border border-white/5"
                  onClick={() => setSelectedImage(item)}
                >
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-8">
                    <p className="text-yellow-500 text-xs font-bold uppercase tracking-[0.2em] mb-2">{item.category}</p>
                    <h3 className="text-white font-display font-bold text-2xl mb-2">{item.title}</h3>
                    <p className="text-gray-400 text-sm line-clamp-2">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-[100] flex items-center justify-center p-4 backdrop-blur-sm" 
            onClick={() => setSelectedImage(null)}
          >
            <button className="absolute top-8 right-8 text-white hover:text-yellow-500 transition-colors">
              <X className="w-10 h-10" />
            </button>
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              className="max-w-5xl w-full bg-zinc-900 rounded-3xl overflow-hidden shadow-2xl border border-white/10" 
              onClick={e => e.stopPropagation()}
            >
              <img src={selectedImage.image} alt={selectedImage.title} className="w-full h-auto max-h-[70vh] object-contain" />
              <div className="p-8">
                <div className="flex items-center gap-3 mb-2">
                  <span className="bg-yellow-500 text-black text-[10px] font-bold px-2 py-1 rounded uppercase tracking-tighter">
                    {selectedImage.category}
                  </span>
                </div>
                <h3 className="text-white text-3xl font-display font-bold mb-4">{selectedImage.title}</h3>
                <p className="text-gray-400 text-lg leading-relaxed">{selectedImage.desc}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
