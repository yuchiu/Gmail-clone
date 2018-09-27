const jayson = require("jayson");

// create a server
const server = jayson.server({
  add(args, callback) {
    callback(null, args[0] + args[1]);
  }
});

server.http().listen(3040);
