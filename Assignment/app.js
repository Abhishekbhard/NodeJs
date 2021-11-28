const http= require('http');
const routes=require('./rouotes');



const server=http.createServer(routes);

server.listen(3000);