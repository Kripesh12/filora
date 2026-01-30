import { AuthRepository } from "../domain/auth.repository";
import { clientEnv } from "./config/env.client";
import { UnauthorizedError } from "../domain/errors/auth.errors";

async function jsonOrMessage(res: Response) {
    try {
        return await res.json()
    } catch {
        return null
    }
}

export class AuthRepositoryHttp implements AuthRepository {
    async login(email: string, password: string): Promise<void> {
        const input = { email, password }
        const res = await fetch(`${clientEnv.baseUrl}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(input)
        })

        if (res.ok) {
            return
        }

        const data = await jsonOrMessage(res)
        if (res.status === 401) {
            throw new UnauthorizedError(data?.message)
        }
        throw new Error(data?.message ?? "Something went wrong")
    }

    async logout(): Promise<void> { }

    async me(): Promise<void> { }
}