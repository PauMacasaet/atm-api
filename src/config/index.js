import { cleanEnv, str, port } from "envalid";

const env = cleanEnv(process.env, {
    NODE_ENV: str({
        choices: ["development", "test", "production"],
        default: "development"
    }),

    PORT: port({
        default: 3000,
    }),

    DB_HOST: str(),

    DB_PORT: port(),

    DB_NAME: str(),

    DB_USER: str(),

    DB_PASSWORD: str(),

    JWT_SECRET: str()
})

export default {
    app: {
        env: env.NODE_ENV,
        port: env.PORT
    },

    database: {
        host: env.DB_HOST,
        port: env.DB_PORT,
        database: env.DB_NAME,
        user: env.DB_USER,
        password: env.DB_PASSWORD
    },

    jwt: {
        secret: env.JWT_SECRET,
        expiresIn: "1h"
    },
}