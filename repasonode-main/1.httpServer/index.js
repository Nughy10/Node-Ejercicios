const http = require("http"); //Importar http de mi paquete http

const PORT = 5000; //Definimos en que puerto está nuestro servidor

const requestHandler = (req, res) => {
  //Creamos una función para probar que nos imprima por consola la petición req y la respuesta res
  // console.log(req);
  // console.log(res);

  res.setHeader("Content-Type", "text/json"); //indicamos en el header que el servidor va a responder con contenido text/json

  res.writeHead(200); //estado de la respuesta es 200 --> OK

  res.end("¡Nuestro servidor funciona!");
};

const server = http.createServer(requestHandler);

server.listen(PORT, () => {
  console.log(`Server started in http://localhost:${PORT}`);
});
