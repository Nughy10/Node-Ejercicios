const mongoose = require("mongoose");
const {DB_URL} = require('./db.config');

const connect = async () => {
  try {
    const connection = await mongoose.connect(DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    const {host, port, name} = connection.connection;

    console.log(`Connected to db ${name} en ${host}:${port}`);
  } catch (error) {}
};

module.exports = {
  connect,
  DB_URL,
};
