const { Router } = require("express");
const categoriasRouter = Router();
const { listaCategorias } = require("../controller/categorias.controller");

categoriasRouter.get("/", listaCategorias);

module.exports = categoriasRouter;
