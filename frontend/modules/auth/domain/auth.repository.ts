
export interface AuthRepository {
    login(email: string, password: string): Promise<void>
    me(): Promise<void>
    logout(): Promise<void>
}
