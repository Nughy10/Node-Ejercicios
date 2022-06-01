const http = require('http');

const PORT = 5000; 

const requestHandler = (req,res) => {
    res.setHeader('Content-Type', 'text/json');
    res.writeHead(200);

    if(req.url === '/'){
        res.end('hola');    
    }
    if(req.url === '/movies'){
        res.end('movies  aaaaa');
    }
    if(req.url === '/actores'){
        res.end('actores bbbb');
    }
}


const server = http.createServer(requestHandler);

server.listen(PORT, () => {
    console.log(`Server started in http://localhost:${PORT}`);
})