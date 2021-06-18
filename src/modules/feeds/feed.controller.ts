import { Request, Response } from "express";
import {
  insufficientParameters,
  mongoError,
  successResponse,
  failureResponse,
} from "../common/service";
import { IPost } from "./feed.model";
import PostService from "./feed.service";
import e = require("express");

export class PostController {
  private post_service: PostService = new PostService();

  public create_post(req: Request, res: Response) {
    // check whether all the fields were send through the request
    if (req.body.caption && req.body.image) {
      const post_params: IPost = {
        caption: req.body.caption,
        image: req.body.image,
        modification_notes: [
          {
            modified_on: new Date(Date.now()),
            modified_by: "samuel",
            modification_note: "New user created",
          },
        ],
      };
      this.post_service.createPost(
        post_params,
        (err: any, post_data: IPost) => {
          if (err) {
            mongoError(err, res);
          } else {
            successResponse("create post successful", post_data, res);
          }
        }
      );
    } else {
      //  error response if some fields are missing in request body
      insufficientParameters(res);
    }
  }
}
