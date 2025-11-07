"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Hero() {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => setIsClient(true), []);
  if (!isClient) return null;

  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#1C1815]">
      {/* 🎥 Background Video */}
      <video
        src="/assets/b-roll-coffee.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-90"
      />

      {/* ☁️ Overlay Vignette + Grain */}
      <div className="absolute inset-0 bg-linear-to-b from-black/40 via-black/20 to-[#1C1815]/70 z-10" />
      <div className="absolute inset-0 bg-[url('/assets/grain.png')] opacity-[0.15] mix-blend-overlay z-20"></div>

      {/* 🌅 Hero Text */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative z-30 h-full flex flex-col justify-center px-8 sm:px-16 lg:px-32 text-white"
      >
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="font-playfair text-5xl sm:text-6xl lg:text-7xl leading-tight text-[#F5F1E7]"
        >
          Nikmati <span className="text-[#CBB89D]">Kopi Dari Tetangga</span>
          <br />
          Dengan Cita Rasa Asli Indonesia
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="text-lg sm:text-xl text-[#D8CEC3] mt-6 max-w-xl">
          Dibuat dengan tangan hangat barista lokal, menghadirkan aroma, rasa, dan cerita disetiap tetesnya.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="flex gap-4 mt-10"
        >
          <Link
            href="/menu"
            className="bg-[#CBB89D] text-[#1C1815] px-6 py-3 rounded-full font-semibold hover:bg-[#E5D8BF] transition-all duration-300">
            Lihat Menu
          </Link>
          <Link
            href="/about"
            className="border border-[#CBB89D] text-[#CBB89D] px-6 py-3 rounded-full font-semibold hover:bg-[#CBB89D]/20 transition-all duration-300">
            Tentang Kami
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
