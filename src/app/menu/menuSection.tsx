'use client'
import { motion } from "framer-motion";
import Image from "next/image";
import { products } from "../../data/products";


export default function MenuSection() {
  return (
    <section
      id="menu"
      className="relative py-24 bg-[#FCFAF7] overflow-hidden"
    >
      {/* Decorative background gradient */}
      <div className="absolute inset-0 bg-linear-to-b from-[#F5F1E7] via-[#FCFAF7] to-[#F5F1E7] pointer-events-none" />

      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-center relative z-10 mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-playfair text-[#3B2B2B] mb-4 tracking-wide">
          Menu Andalan Kami
        </h2>
        <p className="text-[#6B4A3D]/80 max-w-xl mx-auto font-inter text-sm md:text-base leading-relaxed">
          Diseduh dengan sepenuh hati, dari biji kopi pilihan hingga sentuhan akhir yang menggoda lidah.
        </p>
        <div className="mt-6 flex justify-center">
          <span className="w-24 h-0.5 bg-[#CBB89D]/70 rounded-full"></span>
        </div>
      </motion.div>

      {/* Product Grid */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="
              group bg-white rounded-2xl overflow-hidden shadow-[0_4px_15px_rgba(0,0,0,0.08)]
              hover:shadow-[0_8px_25px_rgba(0,0,0,0.1)] transition-all duration-500
              border border-[#E7E0D2]/60
            "
          >
            {/* Image */}
            <div className="relative overflow-hidden h-56">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#1C1815]/40 to-transparent opacity-50 group-hover:opacity-40 transition" />
              <span className="absolute top-4 left-4 bg-[#CBB89D]/80 text-[#1C1815] text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-sm">
                {item.category}
              </span>
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col justify-between">
              <div>
                <h3 className="font-playfair text-xl text-[#3B2B2B] mb-2">
                  {item.name}
                </h3>
                <p className="text-sm text-[#6B4A3D]/80 mb-4">
                  {item.description}
                </p>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-[#3B2B2B] font-semibold">{item.price}</p>
                <button className="border border-[#CBB89D]/60 text-[#3B2B2B] text-xs px-4 py-2 rounded-full hover:bg-[#CBB89D]/10 transition-all duration-300">
                  Pesan
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
