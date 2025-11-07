"use client";

import { useEffect } from "react";
import { useAuthStore } from "@/store/authStore";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const setUser = useAuthStore((state) => state.setUser);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, [setUser]);

  return ( 
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
