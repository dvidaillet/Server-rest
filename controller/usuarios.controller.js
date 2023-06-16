const { response } = require("express");

const getUsuario = (req, res) => {
  const { q, nombre, apiKey } = req.query;
  res.json({
    msg: "Desde usuarios controller",
    q,
    nombre,
    apiKey,
  });
};
const deleteUsuario = (req, res) => {
  res.json({
    msg: "Desde delete usuarios controller",
  });
};

const postUsuario = (req, res) => {
  const { nombre, edad } = req.body;
  res.json({
    msg: "Desde post usuarios controller",
    nombre,
    edad,
  });
};
const putUsuario = (req, res) => {
  const id = req.params.id;
  const a = req.params.a;
  res.json({
    msg: "Desde put usuarios controller",
    id,
    a,
  });
};

module.exports = {
  getUsuario,
  deleteUsuario,
  putUsuario,
  postUsuario,
};
