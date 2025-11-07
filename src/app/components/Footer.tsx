"use client";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="relative bg-[#1C1815] text-[#F5F1E7] py-16 mt-32 overflow-hidden"
    >
      {/* Gradient subtle di atas */}
      <div className="absolute top-0 left-0 w-full h-0.5 bg-linear-to-r from-transparent via-[#CBB89D]/40 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 grid sm:grid-cols-3 gap-10 relative z-10">
        {/* Logo & Description */}
        <div>
          <h2 className="font-playfair text-2xl font-semibold mb-3 text-[#F5F1E7]">
            Kopi Warlok
          </h2>
          <p className="text-sm text-[#CBB89D]/80 leading-relaxed">
            Dari Tetangga untuk Semua ☕ <br />
            Nikmati kopi lokal berkualitas dengan cita rasa khas nusantara.
          </p>
        </div>

        {/* Navigation Menu */}
        <div>
          <h3 className="font-semibold text-[#CBB89D] mb-4 uppercase tracking-wider">Menu</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/about"
                className="hover:text-[#E7DCCE] transition-colors duration-200">
                About
              </a>
            </li>
            <li>
              <a
                href="/services"
                className="hover:text-[#E7DCCE] transition-colors duration-200"
              >
                Menu
              </a>
            </li>
            <li>
              <a
                href="/teams"
                className="hover:text-[#E7DCCE] transition-colors duration-200"
              >
                Teams
              </a>
            </li>
            <li>
              <a
                href="/blog"
                className="hover:text-[#E7DCCE] transition-colors duration-200"
              >
                Blog
              </a>
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="font-semibold text-[#CBB89D] mb-4 uppercase tracking-wider">
            Social
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="#"
                className="hover:text-[#E7DCCE] transition-colors duration-200"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-[#E7DCCE] transition-colors duration-200"
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-[#E7DCCE] transition-colors duration-200"
              >
                TikTok
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Divider line */}
      <div className="max-w-7xl mx-auto mt-12 border-t border-[#CBB89D]/20 pt-6 text-center text-xs text-[#CBB89D]/60">
        © {new Date().getFullYear()} <span className="text-[#F5F1E7]">Kopi Warlok</span>. All rights reserved.
      </div>

      {/* Decorative grain overlay */}
      <div className="absolute inset-0 bg-[url('/assets/grain.png')] opacity-5 pointer-events-none"></div>
    </motion.footer>
  );
}
