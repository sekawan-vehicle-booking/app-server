import { IUser } from "../models/Users";
import { Request, Response } from "express";
import ServiceUsers from "../services/ServiceUsers";
import { authorizeJwt } from "../utils/encryption";

class ControllerUsers {
  private _serviceUsers: ServiceUsers;

  constructor(serviceUsers: ServiceUsers) {
    this._serviceUsers = serviceUsers;
  }

  //   #region List
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

  //   #region Register
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

  //   #region Login
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

        if (typeof user !== "string") {
          return res.status(404).json({
            success: user.success,
            message: user.message,
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

  check() {
    return (req: Request, res: Response) => {
      const authHeader = req.headers.authorization as string;
      const token = authHeader && authHeader.split(" ")[1];
      const response = authorizeJwt(token) as any;

      if (response.name === "TokenExpiredError") {
        return res.status(401).json({
          message: "Token Expired. Please login",
          data: response,
        });
      }

      if (response.name === "JsonWebTokenError") {
        return res.status(401).json({
          message: "JWT must be provided",
          data: response,
        });
      }

      if (!response) {
        return res.status(401).json({
          message: "Unauthorized user",
          data: response,
        });
      }

      return res.status(200).json({
        message: "Authorized user",
        data: response,
      });
    };
  }
}

export default ControllerUsers;
