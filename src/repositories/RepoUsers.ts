import Users, { IUser } from "../models/Users";

class RepoUsers {
  constructor() {}

  // #region List
  async list() {
    const users = Users.query();
    return users;
  }

  //   #region Create
  async create(params: IUser) {
    const user = Users.query().insert({ ...params });
    return user;
  }

  //   #region Find
  async findById(id: string) {
    const user = Users.query().findById(id);
    return user;
  }

  //   #region Update
  async update(id: string, params: IUser) {
    const user = Users.query().findById(id).patch(params);
    return user;
  }

  //   #region Delete
  async delete(id: string) {
    const users = Users.query().deleteById(id);
    return users;
  }
}

export default RepoUsers;
