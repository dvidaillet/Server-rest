const express = require("express");
const app = express();

require("dotenv").config();
const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Hola");
});

app.listen(port, () => {
  console.log(`App corriendo en el puerto ${port}`);
});
