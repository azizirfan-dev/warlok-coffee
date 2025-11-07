'use client'; 

import { dataApi } from "@/app/lib/axios";
import { useAuthStore } from "@/store/authStore";
import { useState } from "react";

export default function useCreateBlog() {
    const {user} = useAuthStore(); 
    const [loading, setLoading] = useState(false); 
    const [message, setMessage] = useState("");

    const APP_ID = process.env.NEXT_PUBLIC_BACKENDLESS_APP_ID; 
    const API_KEY = process.env.NEXT_PUBLIC_BACKENDLESS_API_KEY;

    const uploadImage = async (file: File): Promise<string> => { 
        const formData = new FormData();
        formData.append("file", file)

        const res = await fetch ( 
            `https://api.backendless.com/${APP_ID}/${API_KEY}/files/blogImages/${file.name}`,
            { 
                method: "POST", 
                headers: { 
                    "user-token": user?.userToken || "", 
                }, 
                body: formData, 
            }
        );
        if(!res.ok) throw new Error ("Gagal upload gambar"); 
        const data = await res.json(); 
        return data.fileURL; 
    };

    const createBlog = async (
  title: string,
  content: string,
  imageFile: File | null = null
) => {
  setLoading(true);
  setMessage("");

  try {
    let imageUrl = "";

    if (imageFile) {
      imageUrl = await uploadImage(imageFile as File);
    }

    await dataApi.post("/Blogs", {
      title,
      content,
      imageUrl,
      author: user?.name || "Anon",
      ownerId: user?.objectId,
    });

    setMessage("☕ Blog berhasil dibuat!");
  } catch (err) {
    console.error("Gagal buat blog:", err);
    setMessage("Gagal bikin blog, coba lagi ya.");
  } finally {
    setLoading(false);
  }
};

            return { createBlog, loading, message };
        }


