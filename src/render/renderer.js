// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.
//在渲染器进程 (网页) 中。
const { ipcRenderer } = require('electron')

// ipcRenderer.send('get-all-music', 'ping5555')

// ipcRenderer.on('get-all-music', (event, arg) => {
//     console.log('=3') // prints "pong"
//     console.log(arg) // prints "pong"
//     console.log('=3') // prints "pong"
// })

ipcRenderer.send('get-tag')
ipcRenderer.on('get-all-tag', (event, arg) => {
    console.log(arg) // prints "pong"
})