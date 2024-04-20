import { IUser } from "../models/Users";
import { Request, Response } from "express";
import ServiceUsers from "../services/ServiceUsers";

class ControllerUsers {
  private _serviceUsers: ServiceUsers;

  constructor(serviceUsers: ServiceUsers) {
    this._serviceUsers = serviceUsers;
  }

  list() {
    return async (req: Request, res: Response) => {
      try {
        const users = await this._serviceUsers.list();

        if (!users || users.length < 1) {
          return res.status(404).json({
            success: false,
            message: "Data tidak ditemukan",
          });
        }

        return res.status(200).json({
          success: true,
          message: "Data berhasil ditemukan",
          data: users,
        });
      } catch (error) {
        console.log(error);
        return res.status(500).json({
          success: false,
          message: "Server error",
          error: error,
        });
      }
    };
  }

  register() {
    return async (req: Request, res: Response) => {
      try {
        const params = req.body;
        const user = await this._serviceUsers.create({ ...params });

        if (!user) {
          return res.status(404).json({
            success: false,
            message: "Data gagal ditambahkan",
          });
        }

        return res.status(201).json({
          success: true,
          message: "Data berhasil ditambahkan",
          data: user,
        });
      } catch (error) {
        console.log(error);
        return res.status(500).json({
          success: false,
          message: "Server error",
          error: error,
        });
      }
    };
  }

  login() {
    return async (req: Request, res: Response) => {
      try {
        const { email, password } = req.body;
        const user = await this._serviceUsers.login(email, password);

        if (!user) {
          return res.status(404).json({
            success: false,
            message: "Data tidak ditemukan",
          });
        }

        return res.status(201).json({
          success: true,
          message: "Data berhasil ditemukan",
          data: user,
        });
      } catch (error) {
        console.log(error);
        return res.status(500).json({
          success: false,
          message: "Server error",
          error: error,
        });
      }
    };
  }
}

export default ControllerUsers;
