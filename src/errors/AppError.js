export default class AppError extends Error {
    constructor(message, statusCode, code = null) {
        super(message);

        this.name = this.constructor.name;
        this.statusCode = statusCode;
        this.code = code;

        Error.captureStackTrace(this, this.constructor);
    }

    static badRequest(message = 'Bad Request') {
        return new AppError(message, 400, 'BAD_REQUEST');
    }

    static unauthorized(message = 'Unauthorized') {
        return new AppError(message, 401, 'UNAUTHORIZED');
    }

    static forbidden(message = 'Forbidden') {
        return new AppError(message, 403, 'FORBIDDEN');
    }

    static notFound(message = 'Resource not found') {
        return new AppError(message, 404, 'NOT_FOUND');
    }

    static conflict(message = 'Conflict') {
        return new AppError(message, 409, 'CONFLICT');
    }

    static internal(message = 'Internal Server Error') {
        return new AppError(message, 500, 'INTERNAL_SERVER_ERROR');
    }
}