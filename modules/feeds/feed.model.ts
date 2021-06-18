import { ModificationNote } from "../common/model";

export interface IPost {
  _id?: String;
  caption: String;
  image: String;
  modification_notes: [ModificationNote];
}
