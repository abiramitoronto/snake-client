const { stdin } = require("process");

// establishes a connection with the game server
let connection;
const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};
const handleUserInput = function() {
  
  stdin.on('data', (data) => {
    if (data === 'w') {
      connection.write("Move: up");
      //return ("Move: up");
    }
    if (data === 'a') {
      connection.write("Move: left");
      //return ("Move: left");
    }
    if (data === 's') {
      connection.write("Move: down");
      //return ("Move: down");
    }
    if (data === 'd') {
      connection.write("Move: right");
      //return ("Move: right");
    }
    if (data === '\u0003') {
      process.exit();
    }
  })
};

module.exports = {
  setupInput
};