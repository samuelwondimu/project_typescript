import { ModificationNote } from "../common/model";

export interface IUser {
  _id?: String;
  username: String;
  name: String;
  profilePic: String;
  bio: String;
  modification_notes: [ModificationNote];
}
