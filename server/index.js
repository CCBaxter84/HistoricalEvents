const jsonServer = require('json-server');
const server = jsonServer.create();
const middlewares = jsonServer.defaults({
  static: './client/public'
});
const router = jsonServer.router('db.json');

server.use(middlewares);
server.use(router);
server.use(jsonServer.bodyParser);

server.patch('/events/:description', async (req, res) => {
  try {
    res.status(200).json({ msg: req });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
});

server.listen(3000, () => {
  console.log('Server is running');
});