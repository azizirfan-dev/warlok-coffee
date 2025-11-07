"use client";

import { useState } from "react";
import { useAuthStore } from "@/store/authStore";
import { registerSchema, RegisterSchemaType } from "../lib/validation";
import { z, type ZodIssue } from "zod";
import Link from "next/link";
import { motion } from "framer-motion";

export default function RegisterPage() {
  const { signUp, loading, error } = useAuthStore();

  const [form, setForm] = useState<RegisterSchemaType>({
    name: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    const result = registerSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.issues.forEach((issue: ZodIssue) => {
        const field = issue.path[0] as string;
        fieldErrors[field] = issue.message;
      });
      setErrors(fieldErrors);
      return;
    }

    await signUp(form.email, form.password, form.name);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#FAF6F0] overflow-hidden px-6">
      {/* Background */}
      <div className="absolute inset-0 bg-[url('/assets/texture-paper.png')] opacity-[0.08]" />
      <div className="absolute inset-0 bg-linear-to-b from-[#F8F4EC]/50 to-[#EDE7DF]/70" />

      {/* Floating beans */}
      <motion.img
        src="https://cdn-icons-png.flaticon.com/512/2935/2935402.png"
        alt="coffee beans"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 0.12, y: 0 }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        className="absolute top-14 right-10 w-20 sm:w-28 opacity-20"
      />

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 bg-white/80 backdrop-blur-sm border border-[#CBB89D]/40 
                   shadow-[0_4px_20px_rgba(0,0,0,0.08)] rounded-2xl 
                   px-8 py-10 sm:px-10 sm:py-12 w-full max-w-md"
      >
        <h1 className="font-playfair text-4xl text-center text-[#3B2B2B] mb-3">
          Daftar Akun ☕
        </h1>
        <p className="text-center text-[#5E4C43]/80 mb-8">
          Bergabung dengan komunitas pecinta kopi Warlok —  
          tempat di mana setiap cangkir punya cerita.
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Nama */}
          <div>
            <label className="text-sm text-[#6B4A3D] font-medium">Nama</label>
            <input
              type="text"
              placeholder="Nama lengkap kamu"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full mt-2 border border-[#E4DCD1] bg-[#FCFAF7] focus:border-[#CBB89D]
                         rounded-lg p-3 text-sm text-[#3B2B2B] placeholder-[#B9AFA4]
                         outline-none transition"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1 italic">{errors.name}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="text-sm text-[#6B4A3D] font-medium">Email</label>
            <input
              type="email"
              placeholder="Alamat email aktif"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full mt-2 border border-[#E4DCD1] bg-[#FCFAF7] focus:border-[#CBB89D]
                         rounded-lg p-3 text-sm text-[#3B2B2B] placeholder-[#B9AFA4]
                         outline-none transition"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1 italic">{errors.email}</p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="text-sm text-[#6B4A3D] font-medium">Password</label>
            <input
              type="password"
              placeholder="Buat password"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              className="w-full mt-2 border border-[#E4DCD1] bg-[#FCFAF7] focus:border-[#CBB89D]
                         rounded-lg p-3 text-sm text-[#3B2B2B] placeholder-[#B9AFA4]
                         outline-none transition"
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1 italic">{errors.password}</p>
            )}
          </div>

          {/* Tombol Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#6B4A3D] hover:bg-[#8B5E4B] text-[#FAF6F0] 
                       font-semibold py-3 rounded-full mt-4 transition-all duration-300"
          >
            {loading ? "☕ Sedang mendaftar..." : "Daftar"}
          </button>

          {/* Error backend */}
          {error && (
            <p className="text-red-500 text-center text-sm italic mt-2">{error}</p>
          )}

          {/* Link login */}
          <div className="text-sm text-center mt-6 text-[#5E4C43]/80">
            Sudah punya akun?{" "}
            <Link
              href="/login"
              className="text-[#6B4A3D] font-medium hover:underline hover:text-[#8B5E4B] transition"
            >
              Masuk di sini
            </Link>
          </div>
        </form>
      </motion.div>
    </section>
  );
}
