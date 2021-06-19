import mongoose, { Schema } from "mongoose";
import IAuth from "./auth.interface";

const AuthSchema: Schema = new Schema(
  {
    username: { type: String, required: true },
    password: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.model<IAuth>("Auth", AuthSchema);
