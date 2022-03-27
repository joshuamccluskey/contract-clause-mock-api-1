const jsonServer = require('json-server');
const server = jsonServer.create();
const router1 = jsonServer.router('clausesAbove35K.json');
const router2 = jsonServer.router('clausesBelow35K.json')
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000;

server.use(middlewares);
server.use(router1);
server.use(router2)
server.listen(port);
