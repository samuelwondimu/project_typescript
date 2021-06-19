import express from "express";
import * as bodyParser from "body-parser";
import mongoose from "mongoose";
// import env from "../environment";

// Routes
import { authRoutes } from "../routes/auth.routes";
import { feedRoutes } from "../routes/feed.routes";
import { userRoutes } from "../routes/user.routes";
import { commonRoutes } from "../routes/common.routes";

class App {
  public app: express.Application;
  public mongoUrl: string =
    "mongodb+srv://samuel:samuel@cluster0.mcod3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

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

  private mongoSetup(): void {
    mongoose.connect(this.mongoUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
  }
}
export default new App().app;
