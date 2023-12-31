const { model, Schema } = require("mongoose");

const categoriaSchema = new Schema({
  nombre: {
    type: String,
    required: [true, "El nombre es obligatorio"],
  },
  estado: {
    type: Boolean,
    default: true,
    required: [true, "El estado es obligatorio"],
  },
  usuario: {
    type: Schema.Types.ObjectId,
    ref: "Usuario",
    required: true,
  },
});

module.exports = model("Categoria", categoriaSchema);
