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
app.use("/api/usuario", require("./routes/usuarios.route"));
app.use("/api/auth", require("./routes/auth.routes"));
app.use("/api/categorias", require("./routes/categorias.routes"));
/**
 *  Directorio Publico
 */
app.use(express.static("public"));

app.listen(port, () => {
  console.log(`App corriendo en el puerto ${port}`);
});
