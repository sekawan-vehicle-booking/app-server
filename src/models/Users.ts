import database from "../config/database";
import { Model } from "objection";

Model.knex(database);

export interface IUser {
  id?: string;
  name: string;
  role: "Admin" | "Employee" | "Supervisor";
}

export default class Users extends Model {
  static get tableName() {
    return "users";
  }

  static get idColumns() {
    return "id";
  }
}
