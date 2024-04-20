import { IVehicle } from "../models/Vehicles";
import RepoVehicles from "../repositories/RepoVehicles";

class ServiceVehicles {
  private _repoVehicles: RepoVehicles;

  constructor(repoVehicles: RepoVehicles) {
    this._repoVehicles = repoVehicles;
  }

  //   #region List
  async list() {
    const vehicles = this._repoVehicles.list();
    return vehicles;
  }

  //   #region Find
  async find(id: string) {
    const vehicle = this._repoVehicles.findById(id);
    return vehicle;
  }

  async create(params: IVehicle) {
    const vehicle = this._repoVehicles.create(params);
    return vehicle;
  }

  //   #region Update
  async update(id: string, params: IVehicle) {
    const vehicle = this._repoVehicles.update(id, params);
    return vehicle;
  }

  //   #region Delete
  async delete(id: string) {
    const vehicle = this._repoVehicles.delete(id);
    return vehicle;
  }
}

export default ServiceVehicles;
