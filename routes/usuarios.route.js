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

userRouter.get("/", getUsuario);
userRouter.post(
  "/",
  [
    check("nombre", "El nombre es obligatorio").notEmpty(),
    check("email", "El Formato del email es incorrecto").isEmail(),
    check("password", "La password contiene menos de 6 caracteres").isLength({
      min: 6,
    }),
    check("rol", "El rol no es valido").isIn([
      "ADMIN_ROLE",
      "USER_ROLE",
      "VENTAS_ROLE",
    ]),
    validarCampos,
  ],
  postUsuario
);
userRouter.put("/:id/:a", putUsuario);
userRouter.delete("/", deleteUsuario);

module.exports = userRouter;
