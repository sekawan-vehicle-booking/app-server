import { Request, Response } from "express";
import { IVehicle } from "../models/Vehicles";
import ServiceVehicles from "../services/ServiceVehicles";

class ControllerVehicles {
  private _serviceVehicles: ServiceVehicles;

  constructor(serviceVehicles: ServiceVehicles) {
    this._serviceVehicles = serviceVehicles;
  }

  //   #region List
  list() {
    return async (req: Request, res: Response) => {
      try {
        const vehicles = await this._serviceVehicles.list();

        if (vehicles.length < 1) {
          return res.status(404).json({
            success: false,
            message: "Data tidak ditemukan",
          });
        }

        return res.status(200).json({
          meta: {
            success: true,
            message: "Data berhasil ditemukan",
          },
          data: vehicles,
        });
      } catch (e) {
        console.log(e);
        return res.status(500).json({
          meta: {
            success: false,
            message: "Server error",
          },
          error: e,
        });
      }
    };
  }

  //   #region Find
  find() {
    return async (req: Request, res: Response) => {
      try {
        const id = req.params?.id;
        const vehicle = await this._serviceVehicles.find(id);

        if (!vehicle) {
          return res.status(404).json({
            success: false,
            message: "Data tidak ditemukan",
          });
        }

        return res.status(200).json({
          meta: {
            success: true,
            message: "Data berhasil ditemukan",
          },
          data: vehicle,
        });
      } catch (e) {
        console.log(e);
        return res.status(500).json({
          meta: {
            success: false,
            message: "Server error",
          },
          error: e,
        });
      }
    };
  }

  //   #region Create
  create() {
    return async (req: Request, res: Response) => {
      try {
        const params: IVehicle = req.body;
        const result = await this._serviceVehicles.create(params);

        if (!result) {
          return res.status(401).json({
            success: false,
            message: "Data gagal ditambahkan",
          });
        }

        return res.status(201).json({
          meta: {
            success: false,
            message: "Data berhasil ditambahkan",
          },
          data: result,
        });
      } catch (e) {
        console.log(e);
        return res.status(500).json({
          meta: {
            success: false,
            message: "Server error",
          },
          error: e,
        });
      }
    };
  }

  //   #region Update
  update() {
    return async (req: Request, res: Response) => {
      try {
        const id = req.params?.id;
        const params: IVehicle = req.body;
        const result = await this._serviceVehicles.update(id, params);

        if (!result) {
          return res.status(401).json({
            success: false,
            message: "Data gagal diupdate",
          });
        }

        return res.status(201).json({
          meta: {
            success: true,
            message: "Data berhasil diupdate",
          },
          data: result,
        });
      } catch (e) {
        console.log(e);
        return res.status(500).json({
          meta: {
            success: false,
            message: "Server error",
          },
          error: e,
        });
      }
    };
  }

  //   #region Delete
  delete() {
    return async (req: Request, res: Response) => {
      try {
        const id = req.params?.id;
        const result = await this._serviceVehicles.delete(id);

        if (!result) {
          return res.status(401).json({
            success: false,
            message: "Data gagal dihapus",
          });
        }

        return res.status(201).json({
          meta: {
            success: true,
            message: "Data berhasil dihapus",
          },
          data: result,
        });
      } catch (e) {
        console.log(e);
        return res.status(500).json({
          meta: {
            success: false,
            message: "Server error",
          },
          error: e,
        });
      }
    };
  }
}

export default ControllerVehicles;
