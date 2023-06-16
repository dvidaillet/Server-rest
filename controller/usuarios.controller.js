const {response} = require("express");

const getUsuario = (req, res) => {
  res.json({
    msg: "Desde usuarios controller",
  });
};
const deleteUsuario = (req, res) => {
  res.json({
    msg: "Desde delete usuarios controller",
  });
};

const postUsuario = (req, res) => {
  res.json({
    msg: "Desde post usuarios controller",
  });
};
const putUsuario = (req, res) => {
  res.json({
    msg: "Desde put usuarios controller",
  });
};

module.exports = {
  getUsuario,
  deleteUsuario,
  putUsuario,
  postUsuario,
};
