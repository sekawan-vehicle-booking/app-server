import { IUser } from "../models/Users";
import RepoUsers from "../repositories/RepoUsers";
import { comparePassword, encryptPassword } from "../utils/encryption";

class ServiceUsers {
  private _repoUsers: RepoUsers;

  constructor(repoUsers: RepoUsers) {
    this._repoUsers = repoUsers;
  }

  async list() {
    const users = await this._repoUsers.list();
    return users;
  }

  async create(params: IUser) {
    const user = await this._repoUsers.create(params);
    return user;
  }

  async login(email: string, password: string) {
    const user = await this._repoUsers.findByEmail(email);
    console.log(user);

    if (!user) {
      return false;
    }

    return user;

    // const validatePassword = comparePassword(password, user.password);
  }
}
