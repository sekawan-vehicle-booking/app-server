import database from "../config/database";
import { Model } from "objection";

Model.knex(database);

export interface IVehicle {
  id?: string;
  type: "Angkutan Orang" | "Angkutan Barang";
  ownership: "Perusahaan" | "Sewa";
  manufacture: string;
  model: string;
  color: string;
  plate: string;
  image?: string;
  capacity: number;
  description?: string;
  year: number;
  created_at?: string;
  updated_at?: string;
}

export default class Vehicles extends Model {
  static get tableName() {
    return "vehicles";
  }

  static get idColumns() {
    return "id";
  }
}
