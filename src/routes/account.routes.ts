import { Application, Request, Response } from "express";

export class AccountRoutes {
  public route(app: Application) {
    // Create an account
    app.post("/v1/accounts", (req: Request, res: Response) => {
      res.status(200).json({ message: "Account created" });
    });

    // // Login account
    // app.post("/v1/accounts", (req: Request, res: Response) => {
    //   res.status(200).json({ message: "Login Account" });
    // });

    // validate account
    app.get("/v1/accounts/validate", (req: Request, res: Response) => {
      res.status(200).json({ message: "validate Account" });
    });

    // Get user by :_id
    app.get("/v1/accounts/:all", (req: Request, res: Response) => {
      res.status(200).json({ message: "Get all accounts" });
    });
  }
}
