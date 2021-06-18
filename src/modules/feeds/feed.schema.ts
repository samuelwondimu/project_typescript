import * as mongoose from "mongoose";
import { ModificationNote } from "../common/model";

const Schema = mongoose.Schema;

const schema = new Schema({
  caption: {
    type: String,
    required: true,
  },
  likes: {
    type: Number,
  },
  image: {
    type: String,
    required: true,
  },
  isLiked: {
    type: Boolean,
    default: false,
  },
  modification_notes: [ModificationNote],
});

export default mongoose.model("posts", schema);
