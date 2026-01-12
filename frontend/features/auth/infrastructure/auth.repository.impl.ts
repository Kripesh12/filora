import { loginAction } from "@/app/actions/auth.actions";
import { AuthRepository } from "../domain/repositories/auth-repository";
import { User } from "../domain/entities/user";

export class AuthRepositoryImpl implements AuthRepository {
  async login(email: string, password: string): Promise<User> {
    const result = await loginAction<User>(email, password);

    if (!result.success) {
      throw new Error(result.message);
    }

    return result.data;
  }
}
