import * as mongoose from "mongoose";
import { ModificationNote } from "../common/model";

const Schema = mongoose.Schema;

const schema = new Schema({
  username: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  profilePic: {
    type: String,
    required: true,
  },
  bio: {
    type: String,
    required: true,
  },
  posts: {
    type: Number,
  },
  followers: {
    type: Number,
  },
  followings: {
    type: Number,
  },
  modification_notes: [ModificationNote],
});

export default mongoose.model("users", schema);
// git push origin <your_branch_name> --force
