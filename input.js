// -------------- USER INTERFACE SET UP -------------- //

let connections; // declare to store the active TCP connection object here

const setupInput = function (conn) {
  connections = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  
  return stdin;

};

const handleUserInput = function(key) {

  if (key === "\u0003") {
    process.exit();
  } else if (key === "w") {
    connections.write("Move: up");
  } else if (key === "s") {
    connections.write("Move: down");
  } else if (key === "a") {
    connections.write("Move: left");
  } else if (key === "d") {
    connections.write("Move: right");
  } else if (key === "l") {
    connections.write("Say: Super Ultra Easy Mode");
  }

};

module.exports = {setupInput};