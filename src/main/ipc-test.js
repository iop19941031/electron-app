const { ipcMain } = require('electron')
const fs = require("fs")

// const { Sequelize, Model, DataTypes } = require("sequelize");
const { getAllTag } = require('../db/select')
const { insert } = require('../db/insert')

insert()
module.exports = (function () {
    ipcMain.on('get-tag', async (event, arg) => {
        event.reply(
            'get-all-tag',
            { list: await getAllTag }
        )
    })
    // ipcMain.on('get-all-music', (event, arg) => {
    //     const s = fs.readdirSync("D:/1111")
    //     console.log(s.unshift(null));

    //     fs.promises.readdir("D:/1111").then(files => {
    //         console.log(files.length);
    //         console.log(Object.prototype.toString.call(files));
    //         for (const file of files) {
    //             console.log(file);
    //         }

    //         event.reply(
    //             'get-all-music',
    //             { symbol: arg._symbol, data: files.filter(e => /.mp3$/.test(e)) }
    //         )
    //     })
    // })
})()