
var app = require("app");
//var serialport = require("serialport");
var BrowserWindow = require("browser-window");
var mainWindow = null;
var debug = false;

app.on("window-all-closed", function () {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("ready", function () {
  mainWindow = new BrowserWindow({
    width: 900,
    height: 600,
  });
  mainWindow.loadURL("file://" + __dirname + "/index.html");
  mainWindow.maximize();
  mainWindow.on("closed", function () {
    mainWindow = null;
  });
  if(debug)
    mainWindow.openDevTools();








});
