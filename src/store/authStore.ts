import { create } from "zustand";
import { userApi } from "@/app/lib/axios";

// 🔸 Interface User
interface User {
  email: string;
  name?: string;
  objectId?: string;
  "user-token"?: string;
  role?: string;
  userToken?:string;
}

// 🔸 Interface AuthStore
interface AuthStore {
  user: User | null;
  loading: boolean;
  error: string | null;

  signUp: (email: string, password: string, name?: string) => Promise<void>;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
  setUser: (user: User | null) => void;
}

export const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  loading: false,
  error: null,
  

  setUser: (user) => set({ user }),

  // ✅ Register
  signUp: async (email: string, password: string, name?: string) => {
    set({ loading: true, error: null });
    try {
      const res = await userApi.post("/register", { email, password, name });
      console.log("User registered:", res.data);
      set({ user: res.data, loading: false });
    } catch (err) {
      console.error(" Registration failed:", err);
      set({ error: "User registration failed", loading: false });
    }
  },

  // Sign-In
  signIn: async (email: string, password: string) => {
    set({ loading: true, error: null });
    try {
      const res = await userApi.post("/login", { login: email, password });
      console.log("✅ User login:", res.data);
      const userData = { 
        ...res.data, userToken: res.data["user-token"],
      };
      set({
        user: { 
          email: res.data.email, 
          name: res.data.name, 
          objectId: res.data.objectId, 
          userToken: res.data["user-token"], 
          role: res.data.role || "user",
        },
        loading: false
      })
      localStorage.setItem("user", JSON.stringify(res.data));
      set({ user: res.data, loading: false });
    } catch (err) {
      console.error(" Login failed:", err);
      set({ error: "User login failed", loading: false });
    }
  },

  // ✅ Logout
  signOut: async () => {
    localStorage.removeItem("user");
    set({ user: null });
    console.log("🚪 User logout");
  },
}));
