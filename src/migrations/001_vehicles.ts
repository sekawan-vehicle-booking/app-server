import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("vehicles", (table: Knex.TableBuilder) => {
    table.string("id", 16).primary();
    table.enum("type", ["Angkutan Orang", "Angkutan Barang"]).notNullable();
    table.enum("ownership", ["Perusahaan", "Sewa"]).notNullable();
    table.string("manufacture", 255).notNullable();
    table.string("model", 255).notNullable();
    table.string("color", 255).notNullable();
    table.string("plate", 255).notNullable();
    table.string("image", 255);
    table.integer("capacity").notNullable();
    table.string("description", 255);
    table.integer("year").notNullable();
    table.timestamps(true, true);
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable("vehicles");
}
