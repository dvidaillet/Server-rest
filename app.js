const express = require("express");
const cors = require("cors");
const app = express();

require("dotenv").config();
const port = process.env.PORT;

/**
 * Cors
 *
 */
app.use(cors());

app.use(express.json());

/**
 *  Rutas
 */
app.use("/usuario", require("./routes/usuarios.route"));

/**
 *  Directorio Publico
 */
app.use(express.static("public"));

app.listen(port, () => {
  console.log(`App corriendo en el puerto ${port}`);
});
