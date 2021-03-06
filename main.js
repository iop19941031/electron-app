// Modules to control application life and create native browser window
const { app, BrowserWindow, session } = require('electron')
const path = require('path')
const os = require('os')

require('./src/main/ipc-test')

function createWindow() {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, './src/main/preload.js'),
      nodeIntegration: true
    }
  })

  mainWindow.webContents.openDevTools()

  // and load the index.html of the app.
  mainWindow.loadFile('./public/index.html')
  // mainWindow.loadFile('../react-webpack/dist/index.html')
  // mainWindow.loadURL('http://localhost:8088/')

  // Open the DevTools.
  // mainWindow.webContents.openDevTools({ detach: true });
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow()

  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('ready', async () => {
  await session.defaultSession.loadExtension(
    path.join(os.homedir(), '/AppData/Local/Google/Chrome/User Data/Default/Extensions/fmkadmapgofadopljbjfkapdkoienihi/4.10.1_0'))

  await session.defaultSession.loadExtension(
    path.join(os.homedir(), '/AppData/Local/Google/Chrome/User Data/Default/Extensions/lmhkpmbekcpmknklioeibfkpmmfibljd/2.17.0_0'))
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
