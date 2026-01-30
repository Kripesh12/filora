function required(name: string): string {
    const v = process.env[name];
    if (!v) throw new Error(`Missing env var: ${name}`)
    return v
}

export const clientEnv = {
    baseUrl: required("NEXT_PUBLIC_API_URL")
}