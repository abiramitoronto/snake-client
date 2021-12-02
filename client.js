const net = require("net");
const { stdin } = require("process");
const { IP, PORT } = require("./constants");
const connect = function () {
  const conn = net.createConnection({
    host: IP, // IP address here,
    port: PORT // PORT number here,
  });

  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });

  conn.on('connect', () =>  {
    console.log("Successfully Connected to game server");
    setInterval( () => conn.write("Name: ABI"),2000);
    setInterval( () => conn.write("Move: up"),500) ;
    setInterval( () => conn.write("Say: hello"),500) ;
    
 });
  
  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

module.exports = {
  connect
};
