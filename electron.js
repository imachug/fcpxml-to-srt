let electron = require("electron");
let childProcess = require("child_process");
childProcess.spawn(electron, ["index.js"]);