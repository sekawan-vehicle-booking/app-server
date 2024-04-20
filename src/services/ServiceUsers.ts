import jwt from "jsonwebtoken";
import { IUser } from "../models/Users";
import RepoUsers from "../repositories/RepoUsers";
import { comparePassword, encryptPassword } from "../utils/encryption";

import path from "path";
import dotenv from "dotenv";
dotenv.config({ path: path.resolve(__dirname, "../.env") });

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
    const user = (await this._repoUsers.findByEmail(email)) as unknown as IUser;

    if (!user) {
      return false;
    }

    if (!comparePassword(password, user.password)) {
      return {
        success: false,
        message: "Password is wrong",
      };
    }

    const token = jwt.sign(
      {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
      process.env.JWT_SECRET_KEY as string,
      {
        expiresIn: "3h",
      }
    );

    return token;
  }
}

export default ServiceUsers;
