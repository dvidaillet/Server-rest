const express = require("express");
const cors = require("cors");
const app = express();
const conexionDB = require("./db/config");

require("dotenv").config();
const port = process.env.PORT;

const paths = {
  auth: "/api/auth",
  categorias: "/api/categorias",
  usuarios: "/api/usuario",
};
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
app.use(paths.auth, require("./routes/auth.routes"));
app.use(paths.categorias, require("./routes/categorias.routes"));
app.use(paths.usuarios, require("./routes/usuarios.route"));
/**
 *  Directorio Publico
 */
app.use(express.static("public"));

app.listen(port, () => {
  console.log(`App corriendo en el puerto ${port}`);
});
