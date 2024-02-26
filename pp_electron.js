const { app, BrowserWindow } = require('electron');
const serve = require("electron-serve");
const path = require('path');

const appServe = app.isPackaged ? serve({
  directory: path.join(__dirname, "out")
}) : null;

function createWindow() {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      preload: path.join(__dirname, "preload.js")
    },
  });

  // Load your React app
  /*
  const startUrl = process.env.ELECTRON_START_URL
    ? process.env.ELECTRON_START_URL
    : `file://${path.join(__dirname, 'out/index.html')}`
  ;
  mainWindow.loadURL(startUrl);
  */

  if (app.isPackaged) {
    appServe(mainWindow).then(() => {
      mainWindow.loadURL("out/index.html");
    });
  } else {
    mainWindow.loadURL("http://localhost:3000");
    mainWindow.webContents.openDevTools();
    mainWindow.webContents.on("did-fail-load", (e, code, desc) => {
      // If we got here before Next.JS was started, just retry until it's available.
      mainWindow.webContents.reloadIgnoringCache();
    });
  }

  // Open the DevTools.
  // mainWindow.webContents.openDevTools();
}

app.on('ready', createWindow);

app.on("window-all-closed", () => {
    if(process.platform !== "darwin"){
        app.quit();
    }
});
