const { model, Schema } = require("mongoose");

const categoriaSchema = new Schema({});

module.exports = model("Categoria", categoriaSchema);
