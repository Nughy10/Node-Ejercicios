const mongoose = require("mongoose");
const DB_URL = "mongodb://localhost:27017/movies";

const connect = async () => {
  try {
    const db = await mongoose.connect(DB_URL,{
        useNewUrlParser: true,   //hay algunos warnings en algunas peticiones y con esto las evitas
        useUnifiedTopology: true
    });
    const { host, port, name } = db.connection;

    console.log(`Conectado a la BBDD ${name} en ${host}:${port}`);
  } catch (error) {
    console.log("Error conectando a DB", error);
  }
};

module.exports = { connect };
