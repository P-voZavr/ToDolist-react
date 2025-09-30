import express from "express";
import mongoose from "mongoose";
import ToDoRouter from "./src/routers/ToDo-router.js";
import UserRouter from "./src/routers/User-router.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT;

const app = express();

app.use(cookieParser());
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.use("/api", ToDoRouter);
app.use("/api", UserRouter);

function start() {
  try {
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
    mongoose.connect(process.env.MONGO_URL);
  } catch (e) {
    console.log(e);
  }
}

start();
