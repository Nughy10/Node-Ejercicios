const express = require("express"); //importamos express
const mongoose = require("mongoose");
const PORT = 5000;
const DB_URL = "mongodb://localhost:27017/movies";

const server = express();

const connect = async () => {
  try {
    const db = await mongoose.connect(DB_URL);
    const { host, port, name } = db.connection;

    console.log(`Conectado a la BBDD ${name} en ${host}:${port}`);
  } catch (error) {
    console.log("Error conectando a DB", error);
  }
};

connect();

server.listen(PORT, () => {
  console.log(`Server started in http://localhost:${PORT}`);
});
