import AppError from "../errors/AppError.js";

export default async function errorMiddleware(ctx, next) {
    try {
        await next();
    } catch (error) {
        if (error instanceof AppError) {
            ctx.status = error.statusCode;

            ctx.body = {
                success: false,
                error: {
                    type: error.name,
                    message: error.message
                }
            }

            return;
        }

        console.error(error);

        ctx.status = 500;

        ctx.body = {
            success: false,
            error: {
                code: 'INTERNAL_SERVER_ERROR',
                message: 'An unexpected error occurred.'
            }
        }
    }
}