import knex from "knex";
import config from "../../knexfile.js";

const database = knex(config.development);

export default database;