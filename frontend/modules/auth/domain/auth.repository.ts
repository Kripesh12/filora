import { User } from "./user"

export type LoginInput = { email: string; password: string }

export interface AuthRepository {
    login(input: LoginInput): Promise<void>
    me(): Promise<User>
    logout(): Promise<void>
}
