const net = require("net");
const connect = function () {
  const conn = net.createConnection({
    host: '165.227.47.243', // IP address here,
    port: 50541 // PORT number here,
  });

  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });

  conn.on('connect', () =>  {
    console.log("Successfully Connected to game server");
    setInterval( () => conn.write("Name: ABI"),2000);
    setInterval( () => conn.write("Move: left"),50) ;
    
 });
  
  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};
module.exports = {
  connect
};