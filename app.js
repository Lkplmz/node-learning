const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Home con Express");
});

app.listen(3000, () => {
  console.log("Server Ready");
});
