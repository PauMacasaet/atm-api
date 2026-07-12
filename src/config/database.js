import knex from "knex";
import knexConfig from "../../knexfile.js";

const database = knex(knexConfig.development);

export default database;