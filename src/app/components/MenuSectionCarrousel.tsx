"use client";
import { motion } from "framer-motion";
import { useRef } from "react";
import { products } from "../../data/products";

export default function MenuSectionCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const { scrollLeft, clientWidth } = scrollRef.current;
    const scrollAmount = direction === "left" ? -clientWidth / 1.2 : clientWidth / 1.2;
    scrollRef.current.scrollTo({
      left: scrollLeft + scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="menu"
      className="relative py-24 bg-[#FCFAF7] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* === LEFT SIDE CONTENT === */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-left"
        >
          <p className="uppercase text-sm tracking-[6px] text-[#B9AFA4] mb-3">
            Our Signature
          </p>
          <h2 className="font-playfair text-4xl sm:text-5xl text-[#2B221C] mb-4">
            Menu Andalan Kami
          </h2>
          <p className="text-[#5E4C43] text-base sm:text-lg max-w-md leading-relaxed">
            Setiap cangkir kami racik dengan biji kopi pilihan, menghadirkan
            harmoni rasa dan aroma dari nusantara. Nikmati pengalaman kopi yang
            hangat dan tak terlupakan di setiap tegukan.
          </p>

          {/* Navigasi Tombol Carousel */}
          <div className="flex gap-4 mt-8">
            <button
              onClick={() => scroll("left")}
              className="w-10 h-10 rounded-full border border-[#CBB89D] text-[#3B2B2B] hover:bg-[#CBB89D]/20 transition"
            >
              ←
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-10 h-10 rounded-full border border-[#CBB89D] text-[#3B2B2B] hover:bg-[#CBB89D]/20 transition"
            >
              →
            </button>
          </div>
        </motion.div>

        {/* === RIGHT SIDE CAROUSEL === */}
        <motion.div
          ref={scrollRef}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="
            flex overflow-x-auto gap-6 snap-x snap-mandatory scroll-smooth pb-4
            scrollbar-none
          "
        >
          {products.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="
                min-w-[280px] sm:min-w-[320px] lg:min-w-[340px] snap-center
                bg-white rounded-2xl border border-[#E4DCD1]/70 overflow-hidden
                shadow-[0_4px_15px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_25px_rgba(0,0,0,0.1)]
                transition-all duration-500
              "
            >
              {/* Gambar */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#1C1815]/40 to-transparent opacity-30" />
              </div>

              {/* Konten */}
              <div className="p-6">
                <h3 className="font-playfair text-xl text-[#3B2B2B] mb-1">
                  {item.name}
                </h3>
                <p className="text-[#6B4A3D]/80 text-sm mb-3 line-clamp-2">
                  {item.description}
                </p>
                <p className="text-[#3B2B2B] font-semibold">{item.price}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
