import bcrypt from "bcrypt";
import database from "../config/database.js";

import * as userRepository from "./user.repository.js";
import * as accountRepository from "../accounts/account.repository.js";

import { generateAccountNumber } from "../utils/account-number.js";

import AppError from "../errors/AppError.js";

const SALT_ROUNDS = 12;

export async function register({ username, password }) {
    const existingUser = await userRepository.findByUsername(username);

    if (existingUser) {
        throw AppError.conflict("Username already exists.");
    }

    const passwordHash = await bcrypt.hash(password, SALT_ROUNDS);

    return database.transaction(async (trx) => {
        const user = await userRepository.createUser(
            {
                username,
                password_hash: passwordHash
            },
            trx
        );

        const account = await accountRepository.createAccount(
            {
                user_id: user.id,
                account_number: generateAccountNumber()
            },
            trx
        );

        return {
            user,
            account
        };
    });
}