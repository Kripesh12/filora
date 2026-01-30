import { LoginUseCase } from "./application/login.usecase";
import { AuthRepositoryHttp } from "./infrastructure/auth.repository.http";

export function makeLoginUseCase() {
    return new LoginUseCase(new AuthRepositoryHttp())
}