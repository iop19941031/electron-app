const { user } = require('./model')

exports.insert = async function () {
    const jane = user.build({ name: "11111" });
    // console.log(jane instanceof user); // true
    // console.log(jane.name); // "Jane"
    await jane.save();
}