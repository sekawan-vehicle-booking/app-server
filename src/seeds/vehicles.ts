import fs from "fs";
import { Knex } from "knex";
import vehicles from "../data/vehicles";

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex("vehicles").del();

  // Inserts seed entries
  await knex("vehicles").insert(vehicles);
}
