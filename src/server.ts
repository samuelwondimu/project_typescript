import app from "./config/app";
// import env from "./environment";

const PORT = 5001;

app.listen(PORT, () => {
  console.log("Express server listening on port " + PORT);
});
