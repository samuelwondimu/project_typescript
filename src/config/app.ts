import express from "express";
import * as bodyParser from "body-parser";
import mongoose from "mongoose";
import config from "./config";

// Routes
import { authRoutes } from "../routes/auth.routes";
import { feedRoutes } from "../routes/feed.routes";
import { userRoutes } from "../routes/user.routes";
import { commonRoutes } from "../routes/common.routes";
import logging from "./logging";

const NAMESPACE = "Server";

class App {
  public app: express.Application;
  public mongoUrl: string = config.mongo.url;

  // Routes
  private feed_Route: feedRoutes = new feedRoutes();
  private user_Route: userRoutes = new userRoutes();
  private common_route: commonRoutes = new commonRoutes();
  private auth_Routes: authRoutes = new authRoutes();

  constructor() {
    this.app = express();
    this.config();
    this.mongoSetup();
    this.auth_Routes.route(this.app);
    this.feed_Route.route(this.app);
    this.user_Route.route(this.app);
    this.common_route.route(this.app);
  }
  private config(): void {
    // support application/json type post data
    this.app.use(bodyParser.json());
    //support application/x-www-form-urlencoded post data
    this.app.use(bodyParser.urlencoded({ extended: false }));
  }

  /** Connect to Mongo */
  private mongoSetup(): void {
    mongoose
      .connect(this.mongoUrl, config.mongo.options)
      .then((result) => {
        logging.info(NAMESPACE, "Mongo Connected");
      })
      .catch((error) => {
        logging.error(NAMESPACE, error.message, error);
      });
  }
}
export default new App().app;
