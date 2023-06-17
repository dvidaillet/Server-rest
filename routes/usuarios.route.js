const { Router } = require("express");
const userRouter = Router();
const {
  getUsuario,
  deleteUsuario,
  postUsuario,
  putUsuario,
} = require("../controller/usuarios.controller");
const { check } = require("express-validator");

userRouter.get("/", getUsuario);
userRouter.post(
  "/",
  [
    check("nombre", "El nombre es obligatorio").notEmpty(),
    check("email", "El nombre es obligatorio").isEmail(),
    check("password", "El nombre es obligatorio").isLength({ min: 6 }),
    check("rol", "El rol no es valido").isIn([
      "ADMIN_ROLE",
      "USER_ROLE",
      "VENTAS_ROLE",
    ]),
  ],
  postUsuario
);
userRouter.put("/:id/:a", putUsuario);
userRouter.delete("/", deleteUsuario);

module.exports = userRouter;
