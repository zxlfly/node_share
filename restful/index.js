const Koa = require('koa')
const app = new Koa()
// loader
const config = require('./conf')
const { loadModel } = require('./framework/loader')
loadModel(config)(app)
// 注册路由

const bodyParser = require('koa-bodyparser')
app.use(bodyParser())
app.use(require('koa-static')(__dirname + '/'))
// 注册通用路由
const restful = require('./framework/router')
app.use(restful)


const port = 3000
app.listen(port, () => {
    console.log(`app started at port ${port}`)
})