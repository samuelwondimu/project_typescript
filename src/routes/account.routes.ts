import { Application, Request, Response } from "express";

export class accountRoutes {
  public route(app: Application) {
    // Create an account
    app.post("/v1/account", (req: Request, res: Response) => {
      res.status(200).json({ message: "Account created" });
    });

    // Login account
    app.post("/v1/account", (req: Request, res: Response) => {
      res.status(200).json({ message: "Login Account" });
    });

    // validate account
    app.get("/v1/account/validate", (req: Request, res: Response) => {
      res.status(200).json({ message: "validate Account" });
    });

    // Get user by :_id
    app.get("/v1/account/all", (req: Request, res: Response) => {
      res.status(200).json({ message: "Get all accounts" });
    });
  }
}
