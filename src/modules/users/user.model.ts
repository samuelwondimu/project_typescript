import { ModificationNote } from "../common/model";

export interface IUser {
  _id?: String;
  name: String;
  profilePic: String;
  bio: String;
  modification_notes: [ModificationNote];
}
