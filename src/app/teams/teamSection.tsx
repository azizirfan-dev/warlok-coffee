'use client'

import useSWR from 'swr'
import axios from 'axios'
import { motion } from 'framer-motion'

const fetcher = (url: string) => axios.get(url).then(res => res.data)

export default function TeamsSection() {
  const { isLoading, data, error } = useSWR("https://randomuser.me/api/?results=8", fetcher)

  if (isLoading)
    return (
      <div className="min-h-[70vh] flex items-center justify-center text-[#5E4C43] italic">
        ☕ Lagi diseduh tim-nya... tunggu sebentar ya
      </div>
    )

  if (error)
    return (
      <div className="min-h-[70vh] flex items-center justify-center text-red-500 italic">
        Wah, gagal nyeduh data tim nih 🥲
      </div>
    )

  const team = data?.results || []

  return (
    <section className="relative bg-[#FAF6F0] text-[#3B2B2B] py-24 px-6 sm:px-10 lg:px-16 overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 bg-[url('/assets/texture-paper.png')] opacity-[0.06] pointer-events-none" />

      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-center mb-16 relative z-10"
      >
        <p className="uppercase text-[#B9AFA4] tracking-[6px] text-sm mb-3">
          Dari Barista Lokal
        </p>
        <h1 className="font-playfair text-4xl sm:text-5xl font-bold mb-4 text-[#2B221C]">
          Tim Kami di <span className="text-[#6B4A3D]">Kopi Warlok</span>
        </h1>
        <p className="text-[#5E4C43]/80 max-w-2xl mx-auto text-base sm:text-lg">
          Kenalan dulu sama orang-orang hebat di balik setiap aroma kopi Warlok.
          Mereka bukan cuma barista — tapi seniman rasa dan penjaga cerita.
        </p>
      </motion.div>

      {/* Team Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto relative z-10">
        {team.map((person: any, i: number) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="group bg-white border border-[#E4DCD1]/70 rounded-2xl 
                       shadow-[0_4px_15px_rgba(0,0,0,0.05)]
                       hover:shadow-[0_8px_25px_rgba(0,0,0,0.08)]
                       hover:border-[#CBB89D]/70 
                       transition-all duration-500 p-6 flex flex-col items-center text-center"
          >
            {/* Foto */}
            <div className="relative w-28 h-28 mb-4">
              <img
                src={person.picture.large}
                alt={person.name.first}
                className="w-28 h-28 rounded-full object-cover border-2 border-[#CBB89D]/60 shadow-md group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 rounded-full bg-[#1C1815]/20 opacity-0 group-hover:opacity-20 transition duration-500" />
            </div>

            {/* Nama & Role */}
            <h3 className="font-playfair text-lg font-semibold text-[#3B2B2B]">
              {person.name.first} {person.name.last}
            </h3>
            <p className="text-sm text-[#6B4A3D]/80 mb-3">
              {["Barista", "Roaster", "Manager", "Quality Control"][i % 4]}
            </p>

            {/* Quote */}
            <p className="text-sm text-[#5E4C43]/80 italic leading-relaxed">
              “Saya suka bikin kopi karena tiap cangkir punya cerita sendiri.”
            </p>

            {/* Accent line */}
            <div className="mt-5 w-10 h-0.5 bg-[#CBB89D]/60 rounded-full group-hover:w-20 transition-all duration-500" />
          </motion.div>
        ))}
      </div>
    </section>
  )
}
