import app from "./config/app";
import config from "./config/config";

const NAMESPACE = "Server";

app.listen(config.server.port, () => {
  console.log("Express server listening on port " + config.server.port);
});
