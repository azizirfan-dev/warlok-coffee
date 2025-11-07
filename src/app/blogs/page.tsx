'use client';

import useSWR from "swr";
import { dataApi } from "../lib/axios";
import { motion } from "framer-motion";
import Link from "next/link";
import { useAuthStore } from "@/store/authStore";

const fetcher = (url: string) => dataApi.get(url).then((res) => res.data);

export default function BlogsPage() {
  const { user } = useAuthStore();
  const { data, error, isValidating } = useSWR("Blogs", fetcher);

  if (isValidating && !data)
    return (
      <div className="min-h-[70vh] flex items-center justify-center text-[#5E4C43]">
        <p className="text-center italic text-base sm:text-lg animate-pulse">
          ☕ Lagi nyeduh cerita kopi... sabar dulu ya
        </p>
      </div>
    );

  if (error)
    return (
      <div className="min-h-[70vh] flex items-center justify-center text-red-500">
        <p className="text-center text-base sm:text-lg">
          Wah, gagal nyeduh data nih 🥲
        </p>
      </div>
    );

  const blogs = data || [];

  return (
    <section className="relative bg-[#FAF6F0] text-[#3B2B2B] py-24 px-6 sm:px-10 lg:px-16 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/assets/texture-paper.png')] opacity-[0.06] pointer-events-none" />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-center mb-16 relative z-10"
      >
        <p className="uppercase text-sm tracking-[6px] text-[#B9AFA4] mb-3">
          Cerita dari Warlok
        </p>
        <h1 className="font-playfair text-4xl sm:text-5xl mb-4 text-[#2B221C]">
          Blog Kopi Warlok ☕
        </h1>
        <p className="text-[#5E4C43]/80 max-w-2xl mx-auto text-base sm:text-lg">
          Cerita, inspirasi, dan secangkir makna dari barista lokal — untuk kamu
          yang ingin menikmati kopi lebih dari sekadar rasa.
        </p>

        {/* 🟤 Tombol Create Blog (Admin Only) */}
        {user?.role === "admin" && (
          <div className="mt-8 flex justify-center">
            <Link
              href="/blogs/create"
              className="bg-[#6B4A3D] text-[#FAF6F0] px-6 py-2.5 rounded-full font-medium 
                         hover:bg-[#8B5E4B] hover:shadow-[0_4px_15px_rgba(0,0,0,0.1)] 
                         transition-all duration-300"
            >
              + Tulis Blog Baru
            </Link>
          </div>
        )}
      </motion.div>

      {/* Blog Cards Grid */}
      {blogs.length === 0 ? (
        <p className="text-center text-[#5E4C43]/60 italic">
          Belum ada cerita yang diseduh ☕
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
          {blogs.map((blog:any, i: number) => (
            <motion.div
              key={blog.objectId || i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white rounded-2xl border border-[#E4DCD1]/70 
                         shadow-[0_4px_15px_rgba(0,0,0,0.05)]
                         hover:shadow-[0_8px_25px_rgba(0,0,0,0.08)]
                         transition-all duration-500 overflow-hidden flex flex-col"
            >
              {/* Gambar Blog */}
              {blog.imageUrl ? (
                <div className="relative h-48 sm:h-52 overflow-hidden">
                  <img
                    src={blog.imageUrl}
                    alt={blog.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-[#1C1815]/50 to-transparent opacity-40" />
                </div>
              ) : (
                <div className="h-48 bg-[#EDE7DF] flex items-center justify-center text-[#6B4A3D]/70 italic">
                  No Image ☕
                </div>
              )}

              {/* Konten Blog */}
              <div className="p-6 flex flex-col grow">
                <h3 className="font-playfair text-xl font-semibold mb-2 text-[#3B2B2B] group-hover:text-[#6B4A3D] transition">
                  {blog.title}
                </h3>
                <p className="text-sm text-[#5E4C43]/70 mb-2 italic">
                  {blog.author || "Anonim"}
                </p>
                <p className="text-xs text-[#5E4C43]/60 mb-4">
                  Dibuat:{" "}
                  {blog.created
                    ? new Date(blog.created).toLocaleDateString("id-ID", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })
                    : "Tanggal tidak tersedia"}
                </p>

                <Link
                  href={`/blogs/${blog.objectId}`}
                  className="mt-auto text-sm font-medium text-[#6B4A3D] border border-[#CBB89D] 
                             rounded-full py-2 px-4 text-center hover:bg-[#CBB89D]/15 transition"
                >
                  Baca Selengkapnya →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </section>
  );
}
