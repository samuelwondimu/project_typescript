import app from "./config/app";
import env from "./environment";

const PORT = 3000;

app.listen(PORT, () => {
  console.log("Express server listening on port " + PORT);
});
