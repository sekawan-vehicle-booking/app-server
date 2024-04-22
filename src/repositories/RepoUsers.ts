import Users, { IUser } from "../models/Users";

class RepoUsers {
  constructor() {}

  // #region List
  async list() {
    const users = await Users.query();
    return users;
  }

  //   #region Create
  async create(params: IUser) {
    const user = await Users.query().insert({ ...params });
    return user;
  }

  //   #region Find
  async findById(id: string) {
    const user = await Users.query().findById(id);
    return user;
  }

  async findByName(name: string) {
    const user = await Users.query().where({ name: name });
    return user;
  }

  async findByEmail(email: string) {
    const user = await Users.query().findOne({ email: email });
    return user;
  }

  async findByRole(role: string) {
    const user = await Users.query().where({ role: role });
    return user;
  }

  //   #region Update
  async update(id: string, params: IUser) {
    const user = await Users.query().findById(id).patch(params);
    return user;
  }

  //   #region Delete
  async delete(id: string) {
    const users = await Users.query().deleteById(id);
    return users;
  }
}

export default RepoUsers;
