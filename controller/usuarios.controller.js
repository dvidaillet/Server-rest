const { response } = require("express");
const Usuario = require("../models/usuario");
const bcript = require("bcryptjs");

const getUsuario = async (req, res) => {
  const { limit = 4, desde = 0 } = req.query;
  // const usuarios = await Usuario.find({ estado: true })
  //   .skip(desde)
  //   .limit(limit);
  // const total = await Usuario.countDocuments({ estado: true });

  const [total, usuarios] = await Promise.all([
    Usuario.countDocuments({ estado: true }),
    Usuario.find({ estado: true }).skip(desde).limit(limit),
  ]);
  res.json({
    total,
    usuarios,
  });
};
const deleteUsuario = async (req, res) => {
  const { id } = req.params;
  const borrado = await Usuario.findByIdAndUpdate(id, { estado: false });
  res.json({
    msg: `El usuario fue eliminado con exito`,
    borrado,
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

const putUsuario = async (req, res) => {
  const { id } = req.params;
  const { _id, password, google, email, ...resto } = req.body;

  if (password) {
    const salt = bcript.genSaltSync(12);
    resto.password = bcript.hashSync(password, salt);
  }

  const eUsuario = await Usuario.findByIdAndUpdate(id, resto);

  res.json({
    msg: "Desde put usuarios controller",
    id,
    resto,
  });
};

module.exports = {
  getUsuario,
  deleteUsuario,
  putUsuario,
  postUsuario,
};
