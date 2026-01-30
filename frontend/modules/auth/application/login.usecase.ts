import { AuthRepository, LoginInput } from "../domain/auth.repository";

export class LoginUseCase {
    constructor(private repo: AuthRepository) { }
    execute(input: LoginInput) {
        return this.repo.login(input)
    }
}