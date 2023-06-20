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
const {
  validarRole,
  existeEmail,
  existeUsusarioById,
} = require("../helpers/db-validators");

userRouter.get("/", getUsuario);
userRouter.post(
  "/",
  [
    check("nombre", "El nombre es obligatorio").notEmpty(),
    check("email", "El Formato del email es incorrecto").isEmail(),
    check("email").custom(existeEmail),
    check("password", "La password contiene menos de 6 caracteres").isLength({
      min: 6,
    }),
    check("rol").custom(validarRole),
    validarCampos,
  ],
  postUsuario
);
userRouter.put(
  "/:id",
  [
    check("id", "No es un id valido").isMongoId(),
    check("id").custom(existeUsusarioById),
    // check("rol").custom(validarRole),
    validarCampos,
  ],
  putUsuario
);
userRouter.delete(
  "/:id",
  [
    check("id", "No es un id valido").isMongoId(),
    check("id").custom(existeUsusarioById),
    validarCampos,
  ],
  deleteUsuario
);

module.exports = userRouter;
