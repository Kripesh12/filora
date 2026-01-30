import { AuthRepository } from "../domain/auth.repository";

export class LogoutUseCase {
    constructor(private repo: AuthRepository) { }
    execute() {
        return this.repo.logout()
    }
}