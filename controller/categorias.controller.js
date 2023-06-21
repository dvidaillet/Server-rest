const listaCategorias = (req, res) => {
  res.status(200).json({
    msg: "lista desde la ruta de categorias",
  });
};

const listaCategoriasById = (req, res) => {
  res.status(200).json({
    msg: "Lista por usuario desde la ruta de categorias",
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
