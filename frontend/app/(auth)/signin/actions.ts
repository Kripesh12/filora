import { loginSchema } from "@/lib/auth/schemas"

export async function loginAction(prevState: unknown, formData: FormData) {
    const loginData = {
        email: formData.get("email"),
        password: formData.get("password")
    }
    const parsed = loginSchema.safeParse(loginData)
    if (!parsed.success) {
        return { error: parsed.error }
    }

    return parsed
}