type ApiError = Error & { status: number }

export async function tryParseJson(res: Response) {
    try {
        return await res.json()
    } catch {
        return null
    }
}

function createApiError(message: string, status: number): ApiError {
    const error = new Error(message) as ApiError;
    error.status = status
    return error
}

export async function apiFetch<T>(path: string, init: RequestInit = {}): Promise<T> {
    const res = await fetch(path, {
        ...init,
        headers: {
            "Content-Type": "application/json",
            ...init.headers
        }
    })

    if (!res.ok) {
        const errorBody = await tryParseJson(res)
        const message = errorBody?.message ?? "Something went wrong"
        throw createApiError(message, res.status)
    }

    const body = await tryParseJson(res)
    return body as T
}
