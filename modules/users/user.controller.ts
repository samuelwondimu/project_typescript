import { Request, Response } from "express";
import {
  insufficientParameters,
  mongoError,
  successResponse,
  failureResponse,
} from "../common/service";
import { IUser } from "./user.model";
import UserService from "./user.service";
import e = require("express");

export class UserController {
  private user_service: UserService = new UserService();

  public create_user(req: Request, res: Response) {
    // check whether all the fields were send through the request
    if (
      req.body.username &&
      req.body.name &&
      req.body.profilePic &&
      req.body.bio
    ) {
      const user_params: IUser = {
        username: req.body.username,
        name: req.body.name,
        profilePic: req.body.profilePic,
        bio: req.body.bio,
        modification_notes: [
          {
            modified_on: new Date(Date.now()),
            modified_by: "samuel",
            modification_note: "New user created",
          },
        ],
      };
      this.user_service.createUser(
        user_params,
        (err: any, user_data: IUser) => {
          if (err) {
            mongoError(err, res);
          } else {
            successResponse("create user successful", user_data, res);
          }
        }
      );
    } else {
      //  error response if some fields are missing in request body
      insufficientParameters(res);
    }
  }
}
