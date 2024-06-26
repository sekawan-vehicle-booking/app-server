import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable(
    "vehicle_services",
    (table: Knex.TableBuilder) => {
      table.string("id", 16).primary();
      table.string("idVehicle", 16).notNullable();
      table.timestamp("serviceDate").notNullable();
      table.string("serviceType", 16).notNullable();
      table.integer("serviceCost").notNullable();
      table.timestamps(true, true);

      table.foreign("idVehicle").references("id").inTable("vehicles");
    }
  );
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable("vehicle_services");
}
