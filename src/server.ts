import app from "./config/app";
import env from "./environment";
const cors = require("cors");

const PORT = 5001;

app.use(cors());
app.listen(PORT, () => {
  console.log("Express server listening on port " + PORT);
});
