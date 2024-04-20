import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("vehicles", (table: Knex.TableBuilder) => {
    table.string("id", 16).primary();
    table.integer("typeId").notNullable();
    table.string("name", 255).notNullable();

    table.foreign("typeId").references("id").inTable("vehicle_types");
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable("vehicles");
}
