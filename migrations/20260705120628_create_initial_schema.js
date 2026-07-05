export async function up(knex) {
    await knex.raw('CREATE EXTENSION IF NOT EXISTS "pgcrypto";');

    await knex.schema.createTable("users", (table) => {
        table
            .uuid("id")
            .primary()
            .defaultTo(knex.raw("gen_random_uuid()"));

        table.string("username", 50).notNullable().unique();

        table.string("password_hash").notNullable();

        table.timestamps(true, true);
    });

    await knex.schema.createTable("accounts", (table) => {
        table
            .uuid("id")
            .primary()
            .defaultTo(knex.raw("gen_random_uuid()"));

        table
            .uuid("user_id")
            .notNullable()
            .references("id")
            .inTable("users")
            .onDelete("CASCADE");

        table.string("account_number", 20).notNullable().unique();

        table.decimal("balance", 12, 2).notNullable().defaultTo(0);

        table.timestamps(true, true);
    });

    await knex.schema.createTable("transactions", (table) => {
        table
            .uuid("id")
            .primary()
            .defaultTo(knex.raw("gen_random_uuid()"));

        table
            .uuid("account_id")
            .notNullable()
            .references("id")
            .inTable("accounts")
            .onDelete("CASCADE");

        table
            .enu("type", ["DEPOSIT", "WITHDRAW"], {
            useNative: true,
            enumName: "transaction_type",
            })
            .notNullable();

        table.decimal("amount", 12, 2).notNullable();

        table.decimal("balance_after", 12, 2).notNullable();

        table.timestamp("created_at").defaultTo(knex.fn.now());
    });
}

export async function down(knex) {
    await knex.schema.dropTableIfExists("transactions");
    await knex.schema.dropTableIfExists("accounts");
    await knex.schema.dropTableIfExists("users");

    await knex.raw("DROP TYPE IF EXISTS transaction_type");

    await knex.raw('DROP EXTENSION IF EXISTS "pgcrypto";');
}