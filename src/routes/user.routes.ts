import { Application, Request, Response } from "express";
import { UserController } from "../modules/users/user.controller";
import extractJWT from "../middleware/extractJWT";

export class userRoutes {
  private user_controller: UserController = new UserController();

  public route(app: Application) {
    // Create a user
    app.post("/v1/users", extractJWT, (req: Request, res: Response) => {
      this.user_controller.create_user(req, res);
    });

    // Get users
    app.get("/v1/users", extractJWT, (req: Request, res: Response) => {
      res.status(200).json({ message: "Get users" });
    });

    // Get user by :_id
    app.get("/v1/users/:id", extractJWT, (req: Request, res: Response) => {
      res.status(200).json({ message: "Get users" });
    });
  }
}
