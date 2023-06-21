const { Router } = require("express");
const categoriasRouter = Router();
const { check } = require("express-validator");
const {
  listaCategorias,
  crearCategoria,
  actualizarCategoria,
  listaCategoriasById,
  borrarCategoria,
} = require("../controller/categorias.controller");

const { validarJWT } = require("../helpers/validar-jwt");
const { validarCampos } = require("../middlewares/validar-campos");

//Listar todas las categorias
categoriasRouter.get("/", listaCategorias);

//Listar categorias de un ususario
categoriasRouter.get("/:id", listaCategoriasById);

//crear categoria
categoriasRouter.post(
  "/",
  [
    validarJWT,
    check("nombre", "El nombre es obligatorio").notEmpty(),
    validarCampos,
  ],
  crearCategoria
);

//actualizar una categoria de un usuario
categoriasRouter.put("/:id", actualizarCategoria);

//barrar una categoria solo si es ADMIN
categoriasRouter.delete("/:id", borrarCategoria);

module.exports = categoriasRouter;
