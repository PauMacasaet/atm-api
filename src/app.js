import Koa from "koa";
import bodyParser from "koa-bodyparser";

const app = new Koa()

app.use(bodyParser());

app.use(async ctx => {
    ctx.body = {
        message: "ATM API"
    };
});

export default app;