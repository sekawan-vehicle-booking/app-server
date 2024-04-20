import { Router, Request, Response } from "express";
import RepoVehicles from "../../repositories/RepoVehicles";
import ServiceVehicles from "../../services/ServiceVehicles";
import ControllerVehicles from "../../controllers/ControllerVehicles";

const router = Router();

// Vehicles
const repoVehicles = new RepoVehicles();
const serviceVehicles = new ServiceVehicles(repoVehicles);
const controllerVehicles = new ControllerVehicles(serviceVehicles);

// #region Authentication
router.post("/auth/register");
router.post("/auth/login");

// #region Users
router.get("/users");
router.get("/users/:id");
router.put("/users/:id");
router.delete("/users/:id");

// #region Vehicles
router.get("/vehicles", controllerVehicles.list());
router.get("/vehicles/:id", controllerVehicles.find());
router.post("/vehicles", controllerVehicles.create());
router.put("/vehicles/:id", controllerVehicles.update());
router.delete("/vehicles/:id", controllerVehicles.delete());

// #region Vehicle Services
router.get("/services");
router.get("/services/:id");
router.post("/services");
router.put("/services/:id");
router.delete("/services/:id");

// #region Rents
router.get("/rents");
router.get("/rents/:id");
router.post("/rents");
router.put("/rents/:id");
router.delete("/rents/:id");

export default router;
