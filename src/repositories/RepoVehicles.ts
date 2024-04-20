import Vehicles, { IVehicle } from "../models/Vehicles";

class RepoVehicles {
  constructor() {}

  // #region List
  async list() {
    const vehicles = await Vehicles.query();
    return vehicles;
  }

  //   #region Create
  async create(params: IVehicle) {
    const vehicle = await Vehicles.query().insert({ ...params });
    return vehicle;
  }

  //   #region Find
  async findById(id: string) {
    const vehicle = await Vehicles.query().findById(id);
    return vehicle;
  }

  //   #region Update
  async update(id: string, params: IVehicle) {
    const vehicle = await Vehicles.query().findById(id).patch(params);
    return vehicle;
  }

  //   #region Delete
  async delete(id: string) {
    const vehicle = await Vehicles.query().deleteById(id);
    return vehicle;
  }
}

export default RepoVehicles;
