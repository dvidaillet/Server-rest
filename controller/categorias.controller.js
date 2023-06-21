const listaCategorias = (req, res) => {
  res.status(200).json({
    msg: "desde la ruta de categorias",
  });
};

module.exports = {
  listaCategorias,
};
