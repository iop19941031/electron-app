const { ipcMain } = require('electron')

module.exports = (function () {
    ipcMain.on('asynchronous-message', (event, arg) => {
        console.log(1) // prints "ping"
        console.log(arg) // prints "ping"
        event.reply('asynchronous-reply', 'pong1')
    })

    ipcMain.on('synchronous-message', (event, arg) => {
        console.log(2) // prints "ping"
        console.log(arg) // prints "ping"
        event.returnValue = 'pong2'
    })
})()