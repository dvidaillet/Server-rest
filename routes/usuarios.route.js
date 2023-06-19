const { Router } = require("express");
const userRouter = Router();
const {
  getUsuario,
  deleteUsuario,
  postUsuario,
  putUsuario,
} = require("../controller/usuarios.controller");
const { check } = require("express-validator");
const { validarCampos } = require("../middlewares/validar-campos");
const { validarRole } = require("../helpers/db-validators");
const Role = require("../models/role");

userRouter.get("/", getUsuario);
userRouter.post(
  "/",
  [
    check("nombre", "El nombre es obligatorio").notEmpty(),
    check("email", "El Formato del email es incorrecto").isEmail(),
    check("password", "La password contiene menos de 6 caracteres").isLength({
      min: 6,
    }),
     check("rol").custom(async (rol = '') => {
      const existe = await Role.findOne({ rol });
      if (!existe) {
        throw new Error(`El rol ${rol} no existe en la BD`);
      }
    }),
    validarCampos,
  ],
  postUsuario
);
userRouter.put("/:id/:a", putUsuario);
userRouter.delete("/", deleteUsuario);

module.exports = userRouter;
