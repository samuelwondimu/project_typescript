import { Application, Request, Response } from "express";
import { PostController } from "../modules/feeds/feed.controller";

export class feedRoutes {
  private post_controller: PostController = new PostController();

  public route(app: Application) {
    // Create a post
    app.post("/v1/posts", (req: Request, res: Response) => {
      this.post_controller.create_post(req, res);
    });

    // Get posts
    app.get("/v1/posts", (req: Request, res: Response) => {
      res.status(200).json({ message: "Get posts" });
    });

    // Get post by :_id
    app.get("/v1/posts/:id", (req: Request, res: Response) => {
      res.status(200).json({ message: "Get posts" });
    });

    // Like a post
    app.put("/v1/posts/like/:id", (req: Request, res: Response) => {
      res.status(200).json({ message: "Post liked" });
    });

    // unlike a post
    app.put("/v1/posts/unlike/:id", (req: Request, res: Response) => {
      res.status(200).json({ message: "Posy unliked" });
    });
  }
}
