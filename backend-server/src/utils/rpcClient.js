const jayson = require("jayson");

// create a client
const client = jayson.client.http({
  hostname: "localhost",
  port: 3040
});

// Test Rpc method
export default {
  add: (a, b, callback) => {
    client.request("add", [a, b], (err, response) => {
      if (err) throw err;
      console.log(response.result); // 2
    });
  }
};
