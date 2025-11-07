'use client'
import TestimonialCard from "./TestimonialCard"
import { motion } from "framer-motion";


export default function TestimonialSection() {
  return (
     <section
        className="relative py-32 overflow-hidden"
        id="testimonials"
      >
        {/* Background split tone */}
        <div className="absolute inset-0 bg-linear-to-b from-[#2B221C] to-[#1C1815] z-0"></div>
        <div className="absolute bottom-0 left-0 w-full h-[30%] bg-[#F5F1E7]/10 rounded-t-[60px]"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="uppercase text-sm tracking-[6px] text-[#CBB89D]/80 mb-3">
              What They Say
            </p>
            <h2 className="font-playfair text-4xl sm:text-5xl text-[#F5F1E7] mb-3">
              Kata Mereka Tentang Kami
            </h2>
            <p className="text-[#CBB89D]/80 text-base sm:text-lg max-w-2xl mx-auto">
              Cerita dari pelanggan kami yang telah merasakan hangatnya aroma dan cita rasa kopi tetangga.
            </p>
          </motion.div>

          {/* Cards */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-10"
          >
            <TestimonialCard
              name="Andien"
              role="Musisi"
              image="https://randomuser.me/api/portraits/women/1.jpg"
              comment="Kopi Tetangga selalu jadi teman pagi yang sempurna buat saya, rasanya hangat dan otentik banget!"
            />
            <TestimonialCard
              name="Ari Wibowo"
              role="Pelanggan Setia"
              image="https://randomuser.me/api/portraits/men/2.jpg"
              comment="Gue udah coba semua kopi di sini, tapi Es Kopi Susu Tetangga tetep juara sih!"
            />
            <TestimonialCard
              name="Rani"
              role="Content Creator"
              image="https://randomuser.me/api/portraits/women/3.jpg"
              comment="Tempatnya cozy, kopinya enak, dan pelayanan baristanya super ramah."
            />
          </motion.div>
        </div>
      </section>
  )
}
