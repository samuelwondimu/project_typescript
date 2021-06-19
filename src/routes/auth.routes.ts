import { Application, Request, Response } from "express";

export class authRoutes {
  public route(app: Application) {
    // Create an account
    app.post("/v1/auth", (req: Request, res: Response) => {
      res.status(200).json({ message: "create an account" });
    });

    // login account
    app.post("/v1/auth/signin", (req: Request, res: Response) => {
      res.status(200).json({ message: "login acount" });
    });

    // validate account
    app.post("/v1/auth/validate", (req: Request, res: Response) => {
      res.status(200).json({ message: "validate account" });
    });
  }
}
