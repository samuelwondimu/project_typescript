import { ModificationNote } from "../common/model";
import { Document } from "mongoose";

export default interface IAuth extends Document {
  username: string;
  password: string;
}
