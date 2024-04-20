import Rents, { IRent } from "../models/Rents";

export default class RepoRents {
  constructor() {}

  async list() {
    const rents = await Rents.query();
    return rents;
  }

  async findById(id: string) {
    const rent = await Rents.query().findById(id);
    return rent;
  }

  async findByCarId(idVehicle: string) {
    const rents = await Rents.query().where({ idVehicle: idVehicle });
    return rents;
  }

  async create(params: IRent) {
    const rent = await Rents.query().insert(params);
    return rent;
  }

  async update(id: string, params: IRent) {
    const rent = await Rents.query().findById(id).patch(params);
    return rent;
  }

  async delete(id: string) {
    const rent = await Rents.query().deleteById(id);
    return rent;
  }
}
