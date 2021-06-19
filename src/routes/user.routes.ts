import { Application, Request, Response } from "express";
import { UserController } from "../modules/users/user.controller";
import { AccountController } from "../modules/auth/auth.controller";

export class userRoutes {
  private user_controller: UserController = new UserController();
  private account_controller: AccountController = new AccountController();

  public route(app: Application) {
    // Create a user
    app.post(
      "/v1/users",
      this.account_controller.check_Auth,
      (req: Request, res: Response) => {
        this.user_controller.create_user(req, res);
      }
    );

    // Get users
    app.get("/v1/users", (req: Request, res: Response) => {
      res.status(200).json({ message: "Get users" });
    });

    // Get user by :_id
    app.get("/v1/users/:id", (req: Request, res: Response) => {
      res.status(200).json({ message: "Get users" });
    });
  }
}
