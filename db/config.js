const mongose = require("mongoose");

const conexionDB = async () => {
  try {
    await mongose.connect(process.env.DB_CONECTION);
    console.log("conectado a mongoDB...");
  } catch (error) {
    console.log("🚀 ~ conexionDB ~ error:", error);
  }
};

module.exports = conexionDB;