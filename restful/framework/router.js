const router = require('koa-router')()
const {
    init, get, create, update, del,list
} = require('./api')
//利用通配符 自动将:list变成模型名，后面可以配置参数
// 一些通用的api就这样生成
// 其实就是一种约定，list是对应的模型，后面可以跟参数
// 以这样形式api就可以自动处理
router.get('/api/:list/:id', init, get)
router.get('/api/:list', init, list)
router.post('/api/:list', init,create)
router.put('/api/:list/:id', init, update)
router.delete('/api/:list/:id', init, del)

module.exports = router.routes()