import fs from "fs";
import { Knex } from "knex";

const vehicleTypes = JSON.parse(
  fs.readFileSync("src/data/vehicle_types.json", "utf-8")
);

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex("vehicle_types").del();

  // Inserts seed entries
  await knex("vehicle_types").insert(vehicleTypes);
}
