import ToDo from "./ToDo-model.js";
import express from "express";

const router = express.Router();

router.get("/ToDolst", async (req, res) => {
  try {
    let todos;

    if (req.query.search) {
      todos = await ToDo.find({
        text: { $regex: req.query.search, $options: "i" },
      });
    } else {
      todos = await ToDo.find();
    }

    res.json(todos);
  } catch (error) {
    console.log(error);
  }
});

router.post("/ToDolst", async (req, res) => {
  try {
    const todo = await ToDo.create(req.body);
    res.json(todo);
  } catch (error) {
    console.log(error);
  }
});

router.delete("/ToDolst/:id", async (req, res) => {
  try {
    const deletedtodo = await ToDo.findByIdAndDelete(req.params.id);
    if (!deletedtodo)
      return res.status(404).json({ error: "Задача не найдена" });
    res.json(deletedtodo);
  } catch (error) {
    console.log(error);
  }
});

router.put("/ToDolst/:id", async (req, res) => {
  try {
    const newtodo = await ToDo.findByIdAndUpdate(req.params.id, req.body);
    res.json(newtodo);
  } catch (e) {
    console.log(e);
  }
});

export default router;
