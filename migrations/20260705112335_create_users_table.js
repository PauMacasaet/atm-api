/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
// exports.up = function(knex) {
  
// };

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
// exports.down = function(knex) {
  
// };


export async function up(knex) {
    await knex.schema.createTable('users', table => {
        table.increments('id').primary()
        table.string('username', 50).notNullable().unique()
        table.string('password_hash').notNullable()
        table.timestamps(true, true)
    })
}

export async function down(knex) {
    await knex.schema.dropTableIfExists('users')
}