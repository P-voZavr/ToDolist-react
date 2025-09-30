import { model, Schema } from "mongoose";

const ToDoSchema = new Schema(
  {
    text: { type: String, required: true },
    checkboxvalue: { type: Boolean, required: true },
  },
  { versionKey: false }
);

const UserSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  Todos: [ToDoSchema],
});

export default model("User", UserSchema);
