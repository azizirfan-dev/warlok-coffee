"use client";
import { motion } from "framer-motion";

interface ProductCardProps {
  image: string;
  name: string;
  description: string;
  price: string;
}

export default function ProductCard({
  image,
  name,
  description,
  price,
}: ProductCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.03, y: -5 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="
        bg-[#FCFAF7] border border-[#E4DCD1]/80 rounded-2xl overflow-hidden shadow-[0_4px_10px_rgba(0,0,0,0.05)]hover:shadow-[0_8px_20px_rgba(0,0,0,0.08)hover:border-[#CBB89D]/70transition-all duration-300group">
      {/* Image */}
      <div className="relative">
        <img
          src={image}
          alt={name}
          className="w-full h-60 object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Subtle gradient overlay for cozy feel */}
        <div className="absolute inset-0 bg-linear-to-t from-[#FAF6F0]/40 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col gap-2">
        <h3 className="font-playfair text-2xl text-[#3B2B2B] font-semibold tracking-wide">
          {name}
        </h3>
        <p className="text-[#5E4C43] text-sm leading-relaxed font-inter">
          {description}
        </p>
        <div className="pt-2">
          <p className="font-semibold text-[#6B4A3D] text-lg tracking-wide">
            {price}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
