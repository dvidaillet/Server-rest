const { Router } = require("express");
const categoriasRouter = Router();
const {
  listaCategorias,
  crearCategoria,
  actualizarCategoria,
  listaCategoriasById,
  borrarCategoria,
} = require("../controller/categorias.controller");

//Listar todas las categorias
categoriasRouter.get("/", listaCategorias);

//Listar categorias de un ususario
categoriasRouter.get("/:id", listaCategoriasById);

//crear categoria
categoriasRouter.post("/", crearCategoria);

//actualizar una categoria de un usuario
categoriasRouter.put("/:id", actualizarCategoria);

//barrar una categoria solo si es ADMIN
categoriasRouter.delete("/:id", borrarCategoria);

module.exports = categoriasRouter;
