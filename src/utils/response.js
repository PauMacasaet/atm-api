export function ok(ctx, data) {
    ctx.status = 200;

    ctx.body = {
        success: true,
        data
    };
}

export function created(ctx, data) {
    ctx.status = 201;

    ctx.body = {
        success: true,
        data
    };
}

export function noContent(ctx) {
    ctx.status = 204;
}