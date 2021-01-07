const jsonServer = require('json-server');
const server = jsonServer.create();
const middlewares = jsonServer.defaults({
  static: './client/public'
});
const router = jsonServer.router('db.json');

server.use(middlewares);
server.use(router);

server.listen(3000, () => {
  console.log('Server is running');
});