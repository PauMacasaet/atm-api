import database from "../config/database.js";

export async function findByUsername(username, trx = database) {
    return trx('users')
        .where({ username })
        .first();
}

export async function createUser(user, trx = database) {
    const [createdUser] = await trx('users')
        .insert(user)
        .returning('*');    
    
    return createdUser;
}