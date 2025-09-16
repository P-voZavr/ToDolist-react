import { Schema, model } from "mongoose";

const ToDoSchema = new Schema(
  {
    text: { type: String, required: true },
    checkboxvalue: { type: Boolean, required: true },
  },
  { versionKey: false }
);

export default model("ToDo", ToDoSchema);
