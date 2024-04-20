import database from "../config/database";
import { Model } from "objection";

Model.knex(database);

export interface IVehicles {
  id?: string;
  idCar: string;
  serviceDate: string;
  serviceType: string;
  serviceCost: number;
  created_at?: string;
  updated_at?: string;
}

export default class VehicleServices extends Model {
  static get tableName() {
    return "vehicle_services";
  }

  static get idColumns() {
    return "id";
  }
}
