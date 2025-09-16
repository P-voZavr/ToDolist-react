import express from "express";
import mongoose from "mongoose";
import ToDoRouter from "./src/ToDolist/ToDo-router.js";
import cors from "cors";

const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:5173", // URL твоего фронтенда
  })
);

app.use("/api", ToDoRouter);

function start() {
  try {
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
    mongoose.connect(
      "mongodb+srv://lain:123@node-js-test.gxclaiu.mongodb.net/?retryWrites=true&w=majority&appName=Node-js-test"
    );
  } catch (e) {
    console.log(e);
  }
}

start();
