import { NextFunction, Request, Response } from "express";
import logging from "../../config/logging";
import bcryptjs from "bcryptjs";
import mongoose from "mongoose";
import Auth from "./auth.model";
import signJWT from "./sign.JWT";

const NAMESPACE = "Auth";

export class AuthController {
  public validateToken(req: Request, res: Response, next: NextFunction) {
    logging.info(NAMESPACE, "Token validated, user authorized");
    return res.status(200).json({
      message: "Authorized",
    });
  }

  public registeruser(req: Request, res: Response, next: NextFunction) {
    let { username, password } = req.body;

    bcryptjs.hash(password, 10, (hashError, hash) => {
      if (hashError) {
        return res.status(500).json({
          message: hashError.message,
          error: hashError,
        });
      }

      const _auth = new Auth({
        _id: new mongoose.Types.ObjectId(),
        username,
        password: hash,
      });

      return _auth
        .save()
        .then((auth) => {
          return res.status(201).json({
            auth,
          });
        })
        .catch((error) => {
          return res.status(500).json({
            message: error.message,
            error,
          });
        });
    });
  }

  public loginUser(req: Request, res: Response, next: NextFunction) {
    let { username, password } = req.body;
    Auth.find({ username })
      .exec()
      .then((auths) => {
        if (auths.length !== 1) {
          return res.status(401).json({
            message: "Unauthorized",
          });
        }

        bcryptjs.compare(password, auths[0].password, (error, result) => {
          if (error) {
            logging.error(NAMESPACE, error.message, error);

            return res.status(401).json({
              message: "Password Mismatch",
            });
          } else if (result) {
            signJWT(auths[0], (_error, token) => {
              if (_error) {
                logging.error(NAMESPACE, "unale to sign token: ", error);

                return res.status(401).json({
                  message: _error.message,
                  error: _error,
                });
              } else if (token) {
                return res.status(200).json({
                  message: "Auth successful",
                  token: token,
                  auth: auths[0],
                });
              }
            });
          }
        });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({
          error: err,
        });
      });
  }

  public getAllUser(req: Request, res: Response, next: NextFunction) {
    Auth.find()
      .select("-password")
      .exec()
      .then((users) => {
        return res.status(200).json({
          users,
          count: users.length,
        });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({
          error: err,
        });
      });
  }
}
