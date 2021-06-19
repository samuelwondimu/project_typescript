import { Application, Request, Response } from "express";
import { AuthController } from "../modules/auth/auth.controller";
import extractJWT from "../middleware/extractJWT";

export class authRoutes {
  private auth_controller: AuthController = new AuthController();

  public route(app: Application) {
    // Create an account
    app.post(
      "/v1/auth",
      this.auth_controller.registeruser,
      (req: Request, res: Response) => {
        res.status(200).json({ message: "create an account" });
      }
    );

    // login account
    app.post(
      "/v1/auth/signin",
      this.auth_controller.loginUser,
      (req: Request, res: Response) => {
        res.status(200).json({ message: "login acount" });
      }
    );

    // validate account
    app.get(
      "/v1/auth/validate",
      extractJWT,
      this.auth_controller.validateToken,
      (req: Request, res: Response) => {
        res.status(200).json({ message: "validate account" });
      }
    );
    app.get(
      "/v1/auth/all",
      this.auth_controller.getAllUser,
      (req: Request, res: Response) => {
        res.status(200).json({ message: "get all account" });
      }
    );
  }
}
