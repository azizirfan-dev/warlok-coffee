"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/store/authStore";
import BlogCreateForm from "./BlogCreateForm";
import { motion } from "framer-motion";

export default function CreateBlogPage() {
  const { user } = useAuthStore();
  const router = useRouter();
  const [hydrated, setHydrated] = useState(false);

  // Cegah hydration error
  useEffect(() => {
    setHydrated(true);
  }, []);

  // Cek role user setelah hydration
  useEffect(() => {
    if (!hydrated) return;
    if (!user) router.push("/login");
    else if (user.role !== "admin") router.push("/");
  }, [hydrated, user, router]);

  // Loading state
  if (!hydrated) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#FAF6F0]">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="text-center text-[#6B4A3D]"
        >
          <p className="text-lg">☕ Sedang menyeduh data...</p>
        </motion.div>
      </div>
    );
  }

  // Non-admin access
  if (!user || user.role !== "admin") {
    return (
      <section className="min-h-screen flex flex-col items-center justify-center bg-[#FAF6F0]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center"
        >
          <h1 className="font-playfair text-3xl text-[#3B2B2B] mb-4">
            🔒 Akses Terbatas
          </h1>
          <p className="text-[#5E4C43] text-lg max-w-md mx-auto">
            Maaf bro, cuma admin yang bisa nulis cerita di sini.  
            <br />Nikmatin dulu kopinya ☕️
          </p>
        </motion.div>
      </section>
    );
  }

  // Form utama
  return (
    <section className="relative min-h-screen bg-[#FAF6F0] py-20 px-6 sm:px-10">
      {/* Background decorative */}
      <div className="absolute inset-0 bg-[url('/assets/texture-paper.png')] opacity-[0.05]" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#F8F4EC]/30 to-[#EDE7DF]/50" />

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 text-center mb-10"
      >
        <h1 className="font-playfair text-4xl text-[#3B2B2B] mb-3">
          Buat Cerita Baru ☕
        </h1>
        <p className="text-[#5E4C43]/80 max-w-2xl mx-auto">
          Ceritakan pengalaman, inspirasi, atau rahasia kopi ala Warlok di sini.
        </p>
      </motion.div>

      {/* Form */}
      <div className="relative z-10 max-w-3xl mx-auto bg-white/80 backdrop-blur-sm border border-[#CBB89D]/30 rounded-2xl shadow-md p-8 sm:p-10">
        <BlogCreateForm />
      </div>
    </section>
  );
}
