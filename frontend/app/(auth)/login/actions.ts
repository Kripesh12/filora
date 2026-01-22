"use server"

import { loginSchema } from "@/lib/auth/schemas"

export async function loginAction(formData: FormData) {
    const rawData = {
        email: String(formData.get("email") || ""),
        password: String(formData.get("password") || ""),
        remember: formData.get("remember") === "on",
    };

    const parsed = loginSchema.safeParse(rawData)
    if (!parsed.success) {
        return { ok: false as const, fieldErrors: parsed.error.flatten().fieldErrors }
    }

    const res = await fetch(`${process.env.BACKEND_URL}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data)
    })

    if (!res.ok) {
        return { ok: false, message: "Backend Message" } //TODO: Add appropriate backend message over here
    }

    return { ok: true }
}