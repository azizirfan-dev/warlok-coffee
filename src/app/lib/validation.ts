import {z} from "zod";

export const registerSchema = z.object ({ 
name: z 
.string()
.min(2, "Nama minimal 2 karakter")
.max(50, "Nama maksimal 50 karakter"),
email: z.string().email("Format email tidak valid"), 
password: z.string()
.min(3,"Password minimal 3 karakter"),
}); 

export const loginSchema = z.object ({ 
    email: z.string().email("Format email tidak valid"),
    password: z.string()
    .min (3, "Password minimal 3 karakter")
}); 

export type RegisterSchemaType = z.infer<typeof registerSchema>; 
export type LoginSchemaType = z.infer<typeof loginSchema> 