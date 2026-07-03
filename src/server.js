import dotenv from "dotenv";
import app from "./app.js";
import database from "./config/database.js";

dotenv.config();

const PORT = process.env.PORT || 3000;

async function startServer() {
    try {
        await database.raw("SELECT 1");

        console.log("Connected to PostgreSQL");

        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
}

startServer();