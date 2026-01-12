import { apiRequest } from "@/shared/lib/api";

const API_BASE_URL = "http://localhost:8080/api/v1";

export async function loginAction<T>(email: string, password: string) {
  return apiRequest<T>(`${API_BASE_URL}/auth/signin`, {
    method: "POST",
    credentials: "include",
    body: JSON.stringify({ email, password }),
  });
}
