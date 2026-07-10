import Koa from "koa";
import bodyParser from "koa-bodyparser";

import errorMiddleware from "./middleware/error.middleware.js";
import authRoutes from "./auth/auth.routes.js";

const app = new Koa()

app.use(errorMiddleware);

app.use(bodyParser());

app.use(authRoutes.routes());
app.use(authRoutes.allowedMethods());

// app.use(async ctx => {
//     ctx.body = {
//         message: "ATM API"
//     };
// });

export default app;