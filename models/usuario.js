const { model, Schema } = require("mongoose");

const usuario = Schema(
  {
    nombre: {
      type: String,
      required: [true, "El nombre es obligatorio"],
    },
    email: {
      type: String,
      required: [true, "El correo es obligatorio"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "La contraseña es obligatoria"],
    },
    imagen: {
      type: String,
    },
    rol: {
      type: String,
      required: true,
      enum: ["ADMIN_ROLE", "USER_ROLE", "VENTAS_ROLE"],
    },
    estado: {
      type: Boolean,
      default: true,
    },
    google: {
      type: Boolean,
    },
  },
  {
    versionKey: false,
    timestamps: true /* { createdAt: true, updatedAt: true } */,
  }
);

module.exports = model("Usuario", usuario);
