const express = require("express");
const cors = require("cors");
const app = express();

//MiddleWares
app.use(cors());
app.use(express.json());

//Gather data (MongoDB)
const products = [
  { id: 1, nombre: "i3-8100", precio: 100 },
  { id: 2, nombre: "i7-9400K", precio: 200 },
];

app.get("/api/get_products", (req, res) => {
  res.json(products);
});

app.listen(3000, () => {
  console.log("Server Ready");
});
