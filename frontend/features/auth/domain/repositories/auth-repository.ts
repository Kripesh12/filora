import { User } from "../entities/user";

export interface AuthRepository {
  login(email: string, password: string): Promise<User>;
}
