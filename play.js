const { stdout, stdin } = require("process");
const {connect} = require("./client");
const { setupInput } = require("./input");

console.log("Connecting ...");
setupInput(connect());