import express from "express";
import {
  registration,
  login,
  logout,
  refresh,
} from "../controllers/User-controller.js";

const router = new express.Router();

router.post("/register", registration);

router.post("/login", login);

router.post("/logout", logout);

router.get("/refresh", refresh);

export default router;
