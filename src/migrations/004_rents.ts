import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("rents", (table: Knex.TableBuilder) => {
    table.string("id", 16).primary();

    table.string("idVehicle", 16).notNullable();
    table.string("idEmployee", 16).notNullable();
    table.string("idAdmin", 16).notNullable();
    table.string("idSupervisor", 16).notNullable();

    table.string("purpose", 255).notNullable();
    table
      .enum("status", ["pending", "accepted", "rejected", "finished"])
      .notNullable();
    table.timestamp("startUsageDate").notNullable();
    table.timestamp("endUsageDate").notNullable();
    table.float("oilConsumption");
    table.string("notes", 255).notNullable();

    table.timestamps(true, true);

    table.foreign("idVehicle").references("id").inTable("vehicles");
    table.foreign("idEmployee").references("id").inTable("users");
    table.foreign("idAdmin").references("id").inTable("users");
    table.foreign("idSupervisor").references("id").inTable("users");
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable("rents");
}
