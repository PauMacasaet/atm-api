import database from "../config/database.js";

export async function createAccount(account, trx = database) {
    const [createdAccount] = await trx('accounts')
        .insert(account)
        .returning('*');

    return createdAccount;
}