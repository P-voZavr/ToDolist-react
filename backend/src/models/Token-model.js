import { model, Schema } from "mongoose";

const TokenSchema = new Schema({
  refreshToken: { type: String, required: true },
  userid: { type: Schema.Types.ObjectId, ref: "User", required: true },
});

export default model("Token", TokenSchema);
