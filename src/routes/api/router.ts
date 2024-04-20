import { Router, Request, Response } from "express";
import RepoVehicles from "../../repositories/RepoVehicles";
import ServiceVehicles from "../../services/ServiceVehicles";
import ControllerVehicles from "../../controllers/ControllerVehicles";
import RepoUsers from "../../repositories/RepoUsers";
import ServiceUsers from "../../services/ServiceUsers";
import ControllerUsers from "../../controllers/ControllerUsers";

const router = Router();

// Vehicles
const repoVehicles = new RepoVehicles();
const serviceVehicles = new ServiceVehicles(repoVehicles);
const controllerVehicles = new ControllerVehicles(serviceVehicles);

// Users
const repoUsers = new RepoUsers();
const serviceUsers = new ServiceUsers(repoUsers);
const controllerUsers = new ControllerUsers(serviceUsers);

// #region Authentication
router.post("/auth/register", controllerUsers.register());
router.post("/auth/login", controllerUsers.login());
router.get("/auth/authorize-jwt", controllerUsers.check());

// #region Users
router.get("/users", controllerUsers.list());
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
