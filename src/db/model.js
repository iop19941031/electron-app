const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'database/test.sqlite'
});

exports.user = sequelize.define("user", {
    name: DataTypes.TEXT,
    favoriteColor: {
        type: DataTypes.TEXT,
        defaultValue: 'green'
    },
    age: DataTypes.INTEGER,
    cash: DataTypes.INTEGER
});