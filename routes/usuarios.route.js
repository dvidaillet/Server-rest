const { Router } = require("express");
const userRouter = Router();
const {
  getUsuario,
  deleteUsuario,
  postUsuario,
  putUsuario,
} = require("../controller/usuarios.controller");

userRouter.get("/", getUsuario);
userRouter.post("/", postUsuario);
userRouter.put("/:id/:a", putUsuario);
userRouter.delete("/", deleteUsuario);

module.exports = userRouter;
