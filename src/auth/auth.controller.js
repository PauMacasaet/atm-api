import * as authService from "./auth.service.js";
import { created } from "../utils/response.js";

export async function register(ctx) {
    const result = await authService.register(ctx.request.body);

    created(ctx, {
        user: {
            id: result.user.id,
            username: result.user.username
        },
        account: {
            id: result.account.id,
            accountNumber: result.account.account_number,
            balance: result.account.balance
        }
    });
}