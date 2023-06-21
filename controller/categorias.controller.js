const Categoria = require("../models/categoria");

const listaCategorias = async (req, res) => {
  const categorias = await Categoria.find({ estado: true });

  res.status(200).json({
    msg: "lista de categorias",
    categorias,
  });
};

const listaCategoriasById = async (req, res) => {
  const { id } = req.params;
  const categorias = await Categoria.find({ usuario: id, estado: true });
  res.status(200).json({
    msg: "Lista por usuario desde la ruta de categorias",
    id,
    categorias,
  });
};

const crearCategoria = (req, res) => {
  res.status(200).json({
    msg: "Crear desde la ruta de categorias",
  });
};

const actualizarCategoria = (req, res) => {
  res.status(200).json({
    msg: "Actualizar desde la ruta de categorias",
  });
};

const borrarCategoria = (req, res) => {
  res.status(200).json({
    msg: "Borrar desde la ruta de categorias",
  });
};

module.exports = {
  listaCategorias,
  crearCategoria,
  actualizarCategoria,
  listaCategoriasById,
  borrarCategoria,
};
