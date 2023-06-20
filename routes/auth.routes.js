const { Router } = require("express");
const authRouter = Router();
const { authGoogle } = require("../controller/auth.controller");

authRouter.post("/", authGoogle);

module.exports = authRouter;
