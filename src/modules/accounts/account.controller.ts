import { NextFunction, Request, Response } from "express";

let authorized = false;

export class AccountController {
  public check_Auth(req: Request, res: Response, next: NextFunction) {
    if (authorized) {
      next();
    } else {
      res.status(403).send("Unauthorized");
    }
  }
}
