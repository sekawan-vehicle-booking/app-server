import database from "../config/database";
import { Model } from "objection";

Model.knex(database);

export interface IRents {
  id?: string;
  idCar: string;
  idEmployee: string;
  idAdmin: string;
  idSupervisor: string;
  purpose: string;
  status: "accepted" | "rejected";
  startUsageDate: string;
  endUsageDate: string;
  oilConsumption: number;
  notes?: string;

  created_at?: string;
  updated_at?: string;
}

export default class Rents extends Model {
  static get tableName() {
    return "rents";
  }

  static get idColumns() {
    return "id";
  }
}
