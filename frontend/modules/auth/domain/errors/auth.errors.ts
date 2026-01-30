export class AuthError extends Error {
    constructor(message: string) {
        super(message)
        this.name = "AuthError"
    }
}

export class InvalidCredentialsError extends AuthError {
    constructor(message?: string) {
        super(message ?? "Invalid Credentials")
    }
}

export class UnauthorizedError extends AuthError {
    constructor(message?: string) {
        super(message ?? "Unauthorized")
    }
}

export class NetworkError extends AuthError {
    constructor(message?: string) {
        super(message ?? "")
    }
}