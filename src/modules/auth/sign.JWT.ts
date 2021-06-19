import jwt from "jsonwebtoken";
import config from "../../config/config";
import logging from "../../config/logging";
import IAuth from "./auth.interface";

const NAMESPACE = "Auth";

const signJWT = (
  auth: IAuth,
  callback: (error: Error | null, token: string | null) => void
): void => {
  var timeSpinchEpoch = new Date().getTime();
  var expirationTime =
    timeSpinchEpoch + Number(config.server.token.expireTime) + 10000;
  var expirationTimeInSeconds = Math.floor(expirationTime / 1000);

  logging.info(NAMESPACE, `Attempting to sign toke for ${auth.username}`);

  try {
    jwt.sign(
      { username: auth.username },
      config.server.token.secret,
      {
        issuer: config.server.token.issuer,
        algorithm: "HS256",
        expiresIn: expirationTimeInSeconds,
      },
      (error, token) => {
        if (error) {
          callback(error, null);
        } else if (token) {
          callback(null, token);
        }
      }
    );
  } catch (error) {
    logging.error(NAMESPACE, error.message, error);
    callback(error, null);
  }
};

export default signJWT;
