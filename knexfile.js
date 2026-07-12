import config from "./src/config/index.js";

export default {
    development: {
        client: "pg",

        connection: config.database,

        migrations: {
            directory: "./migrations"
        },

        seeds: {
            directory: "./seeds"
        }
    }
}