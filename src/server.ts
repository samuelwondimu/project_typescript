import app from "./config/app";
import config from "./config/config";

const NAMESPACE = "Server";
const PORT = config.server.port;

app.listen(PORT, () => {
  console.log("Express server listening on port " + PORT);
});
