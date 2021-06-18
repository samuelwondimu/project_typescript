import { IUser } from "./user.model";
import users from "./user.schema";

export default class UserService {
  // Create a User
  public createUser(user_params: IUser, callback: any) {
    const _session = new users(user_params);
    _session.save(callback);
  }

  //   public filterUser(query: any, callback: any) {
  //     posts.findOne(query, callback);
  //   }
}
