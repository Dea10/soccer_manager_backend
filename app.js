const Server = require('./models/server');

const port = 8081;

const server = new Server(port);

server.listen();