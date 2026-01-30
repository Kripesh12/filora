import { AuthRepository } from "../domain/auth.repository";

export class LoginUseCase {
    constructor(private repo: AuthRepository) { }
    async execute(email: string, password: string) {
        if (!email || !password) throw new Error("Email and password are required")
        return await this.repo.login(email, password)
    }
}