import dotenv from "dotenv";
import app from "./app.js";
import database from "./config/database.js";
import config from "./config/index.js";

dotenv.config();

async function startServer() {
    try {
        await database.raw("SELECT 1");

        console.log("Connected to PostgreSQL");

        app.listen(config.app.port, () => {
            console.log(`Server running on port ${config.app.port}`);
        });
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
}

startServer();