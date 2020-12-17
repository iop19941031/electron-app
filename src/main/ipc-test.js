const { ipcMain } = require('electron')
const fs = require("fs")
const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'database/test.sqlite'
});
const User = sequelize.define('User', {
    // 在这里定义模型属性
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING
        // allowNull 默认为 true
    }
}, {
    freezeTableName: true
});

// `sequelize.define` 会返回模型
console.log(User === sequelize.models.User); // true
(async function () {
    // await User.sync({ force: false });
    // console.log("用户模型表刚刚(重新)创建！");
    
    // const jane = User.build({ firstName: "Jane" });
    // console.log(jane instanceof User); // true
    // console.log(jane.name); // "Jane"
    // await jane.save();
    // console.log('Jane 已保存到数据库!111111111111111111111111111111111111');

    const users = await User.findAll();
    console.log(users.every(user => user instanceof User)); // true
    console.log("All users:", JSON.stringify(users, null, 2));
})()
module.exports = (function () {
    ipcMain.on('get-tag', async (event, arg) => {
        // event.reply(
        //     'get-all-tag',
        //     { list: await getAllTag }
        // )
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