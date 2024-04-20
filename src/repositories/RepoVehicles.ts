import Vehicles, { IVehicle } from "../models/Vehicles";

class RepoVehicles {
  constructor() {}

  // #region List
  async list() {
    const vehicles = Vehicles.query();
    return vehicles;
  }

  //   #region Create
  async create(params: IVehicle) {
    const vehicle = Vehicles.query().insert(params);
    return vehicle;
  }

  //   #region Find
  async findById(id: string) {
    const vehicle = Vehicles.query().findById(id);
    return vehicle;
  }

  //   #region Update
  async update(id: string, params: IVehicle) {
    const vehicle = Vehicles.query().findById(id).patch(params);
    return vehicle;
  }

  //   #region Delete
  async delete(id: string) {
    const vehicle = Vehicles.query().deleteById(id);
    return vehicle;
  }
}

export default RepoVehicles;
