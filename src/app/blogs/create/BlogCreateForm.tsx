"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { dataApi } from "@/app/lib/axios";
import { useAuthStore } from "@/store/authStore";
import { motion } from "framer-motion";

export default function BlogCreateForm() {
  const router = useRouter();
  const { user } = useAuthStore();

  const [form, setForm] = useState({
    title: "",
    content: "",
    imageUrl: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      
      const res = await dataApi.post("Blogs", {
        title: form.title,
        content: form.content,
        imageUrl: form.imageUrl,
        author: user?.name || "Anon",
      });

      console.log("Blog berhasil dibuat:", res.data);
      setMessage("☕ Blog berhasil dibuat!");
      setForm({ title: "", content: "", imageUrl: "" });

      setTimeout(() => {
        router.push("/blogs");
      }, 1500);
    } catch (error) {
      console.error("Gagal buat blog:", error);
      setMessage("Gagal bikin blog. Coba lagi, ya.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="max-w-2xl mx-auto py-12 px-6">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="text-3xl font-bold mb-8 text-center text-[#3B2B2B]"
      >
        Tambah Blog Baru
      </motion.h1>

      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="bg-white p-6 rounded-2xl shadow-lg space-y-6"
      >
        {/* Title */}
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Judul Blog
          </label>
          <input
            type="text"
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
            placeholder="Masukkan judul blog..."
            className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-yellow-500 outline-none"
            required
          />
        </div>

        {/* Content */}
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Isi Blog
          </label>
          <textarea
            value={form.content}
            onChange={(e) => setForm({ ...form, content: e.target.value })}
            placeholder="Tulis isi konten disini..."
            rows={6}
            className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-yellow-500 outline-none"
            required
          />
        </div>

        {/* Image URL */}
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Gambar URL (Opsional)
          </label>
          <input
            type="url"
            value={form.imageUrl}
            onChange={(e) => setForm({ ...form, imageUrl: e.target.value })}
            placeholder="https://contoh.com/gambar.jpg"
            className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-yellow-500 outline-none"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-yellow-500 text-white py-3 rounded-lg hover:bg-yellow-600 transition disabled:opacity-50 font-medium"
        >
          {loading ? "Sedang menyeduh..." : "Buat Blog"}
        </button>

        {/* Message */}
        {message && (
          <p
            className={`text-center text-sm ${
              message.includes("berhasil") ? "text-green-600" : "text-red-500"
            }`}
          >
            {message}
          </p>
        )}
      </motion.form>
    </section>
  );
}
