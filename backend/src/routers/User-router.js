import express from "express";
import {
  registration,
  login,
  logout,
  validation,
  refresh,
  deleteAccount,
} from "../controllers/User-controller.js";

const router = new express.Router();

router.post("/register", registration);

router.post("/login", login);

router.post("/logout", logout);

router.get("/refresh", refresh);

router.get("/validatetoken", validation);

router.delete("/deleteaccount", deleteAccount);

export default router;
