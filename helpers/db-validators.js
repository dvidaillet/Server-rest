const Role = require("../models/role");
const Usuario = require("../models/usuario");

const validarRole = async (rol = '') => {
  const existe = await Role.findOne({ rol });
  if (!existe) {
    throw new Error(`El rol ${rol} no existe en la BD`);
  }
};

const existeEmail = async (correo) => {
  const existeUsuario = await Usuario.findOne({ correo });
  if (existeUsuario) {
    throw new Error(` El correo ${correo} ya esta registrado`);
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
