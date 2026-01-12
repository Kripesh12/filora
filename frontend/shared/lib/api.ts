/* eslint-disable @typescript-eslint/no-explicit-any */

export type ApiResult<T> =
  | { success: true; data: T }
  | { success: false; message: string; status?: number };

export async function apiRequest<T>(
  url: string,
  options?: RequestInit
): Promise<ApiResult<T>> {
  try {
    const res = await fetch(url, {
      ...options,
      headers: {
        "Content-Type": "application/json",
        ...(options?.headers || {}),
      },
    });

    let data: any = null;
    try {
      data = await res.json();
    } catch {
      data = null;
    }

    if (!res.ok) {
      return {
        success: false,
        message: data?.message || "Request failed",
        status: res.status,
      };
    }

    return {
      success: true,
      data,
    };
  } catch {
    return {
      success: false,
      message: "Unable to connect to server",
      status: 503,
    };
  }
}
