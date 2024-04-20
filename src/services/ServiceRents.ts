import { nanoid } from "nanoid";
import { IRent } from "../models/Rents";
import RepoRents from "../repositories/RepoRents";

export default class ServiceRents {
  private _repoRents: RepoRents;

  constructor(repoRents: RepoRents) {
    this._repoRents = repoRents;
  }

  async list() {
    const rents = await this._repoRents.list();
    return rents;
  }

  async findById(id: string) {
    const rent = await this._repoRents.findById(id);
    return rent;
  }

  async findByCarId(idCar: string) {
    const rents = await this._repoRents.findByCarId(idCar);
    return rents;
  }

  async findByUserId(idUser: string) {
    const rents = await this._repoRents.findByUserId(idUser);
    return rents;
  }

  async create(params: IRent) {
    const rent = await this._repoRents.create({
      ...params,
      id: nanoid(16),
      status: "pending",
    });
    return rent;
  }

  async update(id: string, params: IRent) {
    const rent = await this._repoRents.update(id, params);
    return rent;
  }

  async delete(id: string) {
    const rent = await this._repoRents.delete(id);
    return rent;
  }
}
