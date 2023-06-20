const Role = require("../models/role");
const Usuario = require("../models/usuario");

const validarRole = async (rol = "") => {
  const existe = await Role.findOne({ rol });
  if (!existe) {
    throw new Error(`El rol ${rol} no existe en la BD`);
  }
};

//Verificar que el correo exista
const existeEmail = async (email) => {
 const existe = await Usuario.findOne({ email });
  if (existe) {
    throw new Error(`El correo ${email} ya existe`);
  }
};

const existeUsusarioById = async (id) => {
  const existeId = await Usuario.findById(id);
  if (!existeId) {
    throw new Error(` El id: ${id} no existe`);
  }
};

module.exports = {
  validarRole,
  existeEmail,
  existeUsusarioById,
};
