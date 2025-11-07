"use client";

import { useState } from "react";
import { useAuthStore } from "@/store/authStore";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function LoginPage() {
  const router = useRouter();
  const { signIn, loading, error } = useAuthStore();
  const [form, setForm] = useState({ email: "", password: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await signIn(form.email, form.password);
    router.push("/");
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#FAF6F0] overflow-hidden px-6">
      {/* Background overlay / texture */}
      <div className="absolute inset-0 bg-[url('/assets/texture-paper.png')] opacity-[0.08]" />
      <div className="absolute inset-0 bg-linear-to-b from-[#F8F4EC]/40 to-[#EDE7DF]/60" />

      {/* Floating coffee cup deco (optional aesthetic element) */}
      <motion.img
        src="https://cdn-icons-png.flaticon.com/512/924/924514.png"
        alt="coffee icon"
        initial={{ opacity: 0, y: -40, rotate: -10 }}
        animate={{ opacity: 0.1, y: 0, rotate: 10 }}
        transition={{ duration: 4, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        className="absolute top-10 left-12 w-16 sm:w-24 opacity-20"
      />

      {/* Main card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 bg-white/80 backdrop-blur-sm border border-[#CBB89D]/40 
                   shadow-[0_4px_20px_rgba(0,0,0,0.08)] rounded-2xl 
                   px-8 py-10 sm:px-10 sm:py-12 w-full max-w-md"
      >
        <h1 className="font-playfair text-4xl text-center text-[#3B2B2B] mb-4">
          Selamat Datang ☕
        </h1>
        <p className="text-center text-[#5E4C43]/80 mb-8">
          Masuk untuk menikmati suasana dan cerita dari Warlok Coffee.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="text-sm text-[#6B4A3D] font-medium">Email</label>
            <input
              type="email"
              placeholder="Masukkan email kamu"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full mt-2 border border-[#E4DCD1] bg-[#FCFAF7] focus:border-[#CBB89D]
                         rounded-lg p-3 text-sm text-[#3B2B2B] placeholder-[#B9AFA4]
                         outline-none transition"
              required
            />
          </div>

          <div>
            <label className="text-sm text-[#6B4A3D] font-medium">Password</label>
            <input
              type="password"
              placeholder="Masukkan password kamu"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              className="w-full mt-2 border border-[#E4DCD1] bg-[#FCFAF7] focus:border-[#CBB89D]
                         rounded-lg p-3 text-sm text-[#3B2B2B] placeholder-[#B9AFA4]
                         outline-none transition"
              required
            />
          </div>

          {error && (
            <p className="text-red-500 text-center text-sm italic">{error}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#6B4A3D] hover:bg-[#8B5E4B] text-[#FAF6F0] 
                       font-semibold py-3 rounded-full mt-4 transition-all duration-300"
          >
            {loading ? "☕ Sedang masuk..." : "Masuk"}
          </button>

          <div className="text-sm text-center mt-6 text-[#5E4C43]/80">
            Belum punya akun?{" "}
            <Link
              href="/register"
              className="text-[#6B4A3D] font-medium hover:underline hover:text-[#8B5E4B] transition"
            >
              Daftar di sini
            </Link>
          </div>
        </form>
      </motion.div>
    </section>
  );
}
