const jsonServer = require('json-server');
const server = jsonServer.create();
const router1 = jsonServer.router('clausesAbove35K.json');
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000;

server.use(middlewares);
server.use(router1);
server.listen(port);
