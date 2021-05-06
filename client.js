const net = require("net");
const { IP, PORT } = require("./constants");

// ---------- FUNCTION IMPLEMENTATION ---------- //

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log("Successfully connected to the Game Server");
    conn.write("Name: ACA");
    // setInterval(() => {
    //   conn.write("Move: up");
    // }, 500);
  });  

  // updated to handle incoming data to console log for player
  conn.on("data", (data) => {
    console.log(data);
  });

  return conn;

};

// ----------------- FUNCTION EXPORT ----------------- //

module.exports = {connect};