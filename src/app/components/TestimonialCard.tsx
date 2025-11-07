"use client";
import { motion } from "framer-motion";

interface TestimonialCardProps {
  name: string;
  comment: string;
  role: string;
  image: string;
}

export default function TestimonialCard({
  name,
  comment,
  role,
  image,
}: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
      whileHover={{ scale: 1.03, y: -3 }}
      className="
        bg-[#FCFAF7] 
        border border-[#E4DCD1]/80 
        rounded-2xl 
        p-8 
        shadow-[0_4px_10px_rgba(0,0,0,0.05)]
        hover:shadow-[0_8px_20px_rgba(0,0,0,0.08)]
        transition-all duration-300
        text-[#3B2B2B]
        max-w-md mx-auto
      "
    >
      {/* Profile Header */}
      <div className="flex items-center gap-4 mb-5">
        <div className="relative">
          <img
            src={image}
            alt={name}
            className="w-14 h-14 rounded-full object-cover border-2 border-[#CBB89D]/60 shadow-sm"
          />
          {/* Subtle glow behind image */}
          <div className="absolute inset-0 rounded-full bg-[#D7C0A2]/20 blur-md -z-10"></div>
        </div>
        <div>
          <h4 className="font-playfair text-lg font-semibold text-[#2E1E1A]">
            {name}
          </h4>
          <p className="text-sm text-[#6B5B52] font-inter">{role}</p>
        </div>
      </div>

      {/* Comment Section */}
      <p className="text-[#4B3B35] italic font-inter leading-relaxed">
        “{comment}”
      </p>
    </motion.div>
  );
}
