const fs = require('fs')
const path = require('path')
const mongoose = require('mongoose')

function load(dir, cb) {
    // 获取绝对路径
    const url = path.resolve(__dirname, dir)
    // 获取文件数组
    const files = fs.readdirSync(url)
    // 遍历
    files.forEach(filename => {
        // 作为URL的子路由需要去掉后缀
        filename = filename.replace('.js', '')
        // 加载文件
        const file = require(url + '/' + filename)
        // 处理业务回调
        cb(filename, file)
    })
}
// 对模型的装载
const loadModel = config => app => {
    // 连接
    mongoose.connect(config.db.url, config.db.options)

    const conn = mongoose.connection
    conn.on('error', () => console.error('连接数据库失败'))
    // 把所有的模型加载到app实例里
    app.$model = {}
    load('../model', (filename, { schema }) => {
        console.log('load model:' + filename, schema)
        // 通过读取到的filename，schema创建model
        // 存入到app.$model
        app.$model[filename] = mongoose.model(filename, schema)
    })

}

module.exports = {
    loadModel
}