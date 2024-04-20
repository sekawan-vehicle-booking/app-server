import { Knex } from "knex";
import users from "../data/users";

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex("table_name").del();

  // Inserts seed entries
  await knex("table_name").insert(users);
}
