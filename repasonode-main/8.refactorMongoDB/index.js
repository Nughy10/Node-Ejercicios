const express = require("express"); //importamos express
const {connect} = require("./db/database")
const PORT = 5000;

const server = express();



connect();

server.listen(PORT, () => {
  console.log(`Server started in http://localhost:${PORT}`);
});
