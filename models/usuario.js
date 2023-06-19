const { model, Schema } = require("mongoose");

const UsuarioSchema = new Schema(
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
      default: false,
    },
  },
  {
    timestamps: true /* { createdAt: true, updatedAt: true } */,
    versionKey: false,
  }
);

UsuarioSchema.methods.toJSON = function () {
  const { password, _id, ...usuario } = this.toObject();
  usuario.uid = _id;
  return usuario;
};

module.exports = model("Usuario", UsuarioSchema);
