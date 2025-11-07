'use client'

import { motion } from "framer-motion";
import ValueCard from "../components/ValueCard";
import { values } from "../../data/aboutData";

export default function AboutSection() {
  return (
    <section className="relative bg-[#FAF6F0] text-[#3B2B2B] pt-36 pb-24 px-6 sm:px-10 lg:px-16 overflow-hidden">

      {/* Background subtle pattern */}
      <div className="absolute inset-0 bg-[url('/assets/texture-paper.png')] opacity-[0.06] pointer-events-none" />

      {/* HEADER SECTION */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="text-center mb-16 relative z-10"
      >
        <p className="uppercase text-[#B9AFA4] tracking-[6px] text-sm mb-2">
          Tentang Kami
        </p>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-playfair font-bold mb-5 leading-tight">
          Tentang <span className="text-[#6B4A3D]">Kopi Warlok</span>
        </h1>
        <p className="text-[#5E4C43]/80 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
          Dari warga lokal — kopi ini lahir dari semangat komunitas untuk menyajikan
          kehangatan dan kualitas terbaik dalam setiap tegukan.  
          Kami percaya, setiap cangkir adalah cerita.
        </p>
      </motion.div>

      {/* DECORATIVE ELEMENT */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        transition={{ delay: 0.5 }}
        className="absolute -bottom-10 left-0 w-full h-[300px] bg-linear-to-t from-[#CBB89D]/20 to-transparent"
      />

      {/* VALUE & CULTURE SECTION */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative z-10"
      >
        <h2 className="text-2xl sm:text-3xl font-semibold mb-10 text-center font-playfair text-[#3B2B2B]">
          Nilai & Budaya Kami
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {values.map((v, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              viewport={{ once: true }}
            >
              <ValueCard title={v.title} desc={v.desc} />
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* MISSION SECTION */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="mt-24 relative z-10 max-w-5xl mx-auto text-center"
      >
        <h3 className="font-playfair text-3xl sm:text-4xl mb-6">
          Misi Kami
        </h3>
        <p className="text-[#5E4C43]/80 leading-relaxed text-base sm:text-lg">
          Mengangkat kopi lokal ke panggung dunia tanpa kehilangan sentuhan asli Nusantara.
          Kami ingin setiap pelanggan merasakan rasa kebersamaan, kehangatan, dan dedikasi barista lokal dalam setiap gelas kopi.
        </p>
      </motion.div>
    </section>
  );
}
