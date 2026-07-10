import Router from "@koa/router";;

import * as authController from "./auth.controller.js";

const router = new Router({
    prefix: "/api/auth",
});

router.post("/register", authController.register);

export default router;