import express from "express";
import {
  getTodos,
  addTodo,
  deleteTodo,
  updateTodo,
} from "../controllers/ToDo-controller.js";

const router = new express.Router();

router.get("/ToDolst", getTodos);

router.post("/ToDoadd", addTodo);

router.delete("/ToDodelete/:id", deleteTodo);

router.put("/ToDoupdate/:id", updateTodo);

export default router;
