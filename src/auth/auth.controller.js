import * as authService from "./auth.service.js";

export async function register(ctx) {
    const result = await authService.register(ctx.request.body);

    ctx.status = 201;

    ctx.body = {
        success: true,
        data: {
            user: {
                id: result.user.id,
                username: result.user.username,
            },
            account: {
                id: result.account.id,
                accountNumber: result.account.account_number,
                balance: result.account.balance
            }
        }
    };
}