const express = require("express");
const cors = require("cors");
const app = express();
const conexionDB = require("./db/config");

require("dotenv").config();
const port = process.env.PORT;

/**
 * conexion a DB
 */
conexionDB();

//utilizar json
app.use(express.json());
/**
 * Cors
 *
 */
app.use(cors());

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
