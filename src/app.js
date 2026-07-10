import Koa from "koa";
import bodyParser from "koa-bodyparser";

import errorMiddleware from "./middleware/error.middleware.js";

const app = new Koa()

app.use(errorMiddleware);

app.use(bodyParser());

app.use(async ctx => {
    ctx.body = {
        message: "ATM API"
    };
});

export default app;