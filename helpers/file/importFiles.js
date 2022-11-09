const path = require("path")

const importFiles = () => {
    let data = fs.readdirSync("../../data")
    console.log(data)
}

module.exports = importFiles