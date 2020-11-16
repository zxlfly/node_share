//流（stream）是 Node.js 中处理流式数据的抽象接口。 stream 模块用于构建实现了流接口的对象。
const fs = require("fs")
const readImg = fs.createReadStream('./ssss.jpg')
const writeImg = fs.createWriteStream('./stream.jpg')
readImg.pipe(ws2)