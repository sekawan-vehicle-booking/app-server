import { Router, Request, Response } from "express";

const router = Router();

// #region Authentication
router.post("/auth/register");
router.post("/auth/login");

// #region Users
router.get("/users");
router.get("/users/:id");
router.put("/users/:id");
router.delete("/users/:id");

// #region Vehicles
router.get("/vehicles");
router.get("/vehicles/:id");
router.post("/vehicles");
router.put("/vehicles/:id");
router.delete("/vehicles/:id");

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
