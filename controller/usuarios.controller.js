const { response } = require("express");
const Usuario = require("../models/usuario");
const bcript = require("bcryptjs");

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

const postUsuario = async (req, res) => {
  const { nombre, email, password, rol, imagen } = req.body;
  try {  
    //creando el modelo del usuario
    const usuario = new Usuario({ nombre, email, password, rol, imagen });

    //Encriptar contraseña
    const salt = bcript.genSaltSync(12);
    usuario.password = bcript.hashSync(password, salt);

    await usuario.save();

    res.json({
      msg: "Desde post usuarios controller",
      usuario,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      ok: false,
      msg: " Contacte con el admin",
    });
  }
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
