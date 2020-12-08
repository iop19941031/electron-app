const { ipcMain } = require('electron')
const fs = require("fs")
module.exports = (function () {
    ipcMain.on('get-all-music', (event, arg) => {
        const s = fs.readdirSync("D:/1111")
        console.log(s.unshift(null));

        fs.promises.readdir("D:/1111").then(files => {
            console.log(files.length);
            console.log(Object.prototype.toString.call(files));
            for (const file of files) {
                console.log(file);
            }

            event.reply(
                'get-all-music',
                { symbol: arg._symbol, data: files.filter(e => /.mp3$/.test(e)) }
            )
        })


    })
})()