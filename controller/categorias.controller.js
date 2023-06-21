const Categoria = require("../models/categoria");

const listaCategorias = async (req, res) => {
  const { desde = 0, limit = 5 } = req.query;

  const [total, categorias] = await Promise.all([
    Categoria.countDocuments({ estado: true }),
    Categoria.find({ estado: true }).skip(desde).limit(limit),
  ]);

  res.status(200).json({
    msg: "lista de categorias",
    total,
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

const crearCategoria = async (req, res) => {
  const nombre = req.body.nombre.toUpperCase();

  const categoriaBD = await Categoria.findOne({ nombre });
  if (categoriaBD) {
    return res.status(400).json({
      msg: `La categoria ${categoriaBD.nombre} ya existe`,
    });
  }

  const data = {
    nombre,
    usuario: req.usuario._id,
  };

  const categoria = new Categoria(data);
  await categoria.save();
  res.status(201).json({
    msg: "Categoria creada con exito",
    categoria,
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
