import { IRent } from "../models/Rents";
import { Request, Response } from "express";
import ServiceRents from "../services/ServiceRents";

export default class ControllerRents {
  private _serviceRents: ServiceRents;

  constructor(serviceRents: ServiceRents) {
    this._serviceRents = serviceRents;
  }

  list() {
    return async (req: Request, res: Response) => {
      try {
        const rents = await this._serviceRents.list();

        if (!rents || rents.length < 1) {
          return res.status(404).json({
            success: false,
            message: "Data tidak ditemukan",
          });
        }

        return res.status(200).json({
          success: true,
          message: "Data berhasil ditemukan",
          data: rents,
        });
      } catch (error) {
        console.log(error);
        return res.status(500).json({
          success: false,
          message: "Server error",
        });
      }
    };
  }

  create() {
    return async (req: Request, res: Response) => {
      try {
        const params = req.body;
        const rent = await this._serviceRents.create(params);

        if (!rent) {
          return res.status(404).json({
            success: false,
            message: "Data gagal ditambahkan",
          });
        }

        return res.status(200).json({
          success: true,
          message: "Data berhasil ditambahkan",
          data: rent,
        });
      } catch (error) {
        console.log(error);
        return res.status(500).json({
          success: false,
          message: "Server error",
        });
      }
    };
  }

  update() {
    return async (req: Request, res: Response) => {
      try {
        const id = req.params?.id;
        const params = req.body;
        const rent = await this._serviceRents.update(id, params);

        if (!rent) {
          return res.status(404).json({
            success: false,
            message: "Data gagal diupdate",
          });
        }

        return res.status(200).json({
          success: true,
          message: "Data berhasil diupdate",
          data: rent,
        });
      } catch (error) {
        console.log(error);
        return res.status(500).json({
          success: false,
          message: "Server error",
        });
      }
    };
  }

  delete() {
    return async (req: Request, res: Response) => {
      try {
        const id = req.params?.id;
        const rent = await this._serviceRents.delete(id);

        if (!rent) {
          return res.status(404).json({
            success: false,
            message: "Data gagal dihapus",
          });
        }

        return res.status(200).json({
          success: true,
          message: "Data berhasil dihapus",
          data: rent,
        });
      } catch (error) {
        console.log(error);
        return res.status(500).json({
          success: false,
          message: "Server error",
        });
      }
    };
  }
}
