const { stdin } = require("process");

// establishes a connection with the game server
const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};
const handleUserInput = () => {
  
  stdin.on('data', (data) => {
    if (data === 'w') {
      //stdin.write("Move: up");
      return ("Move: up");
    }
    if (data === 'a') {
      //stdin.write("Move: left");
      return ("Move: left");
    }
    if (data === '\u0003') {
      process.exit();
    }
  })
};

module.exports = {
  setupInput
};