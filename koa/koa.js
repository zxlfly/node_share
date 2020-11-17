const http = require('http')
const context = require("./context");
const request = require("./request");
const response = require("./response");

class Koa {
    constructor(){
        this.middlewares=[]
    }
    listen(...arg) {
        const server = http.createServer(async(req, res) => {
            // 创建上下文ctx
            const ctx = this.createContext(req, res)
            // 中间件合成
            const fn = this.compose(this.middlewares)
            // 执行合成函数并传入ctx
            await fn(ctx)
            // 响应
            res.end(ctx.body)
        })
        server.listen(...arg)
    }
    use(callback) {
        // 将中间件加到数组里
        this.middlewares.push(callback);
    }
    // 构建上下文，把res和req挂载到ctx上，并且并且在ctx.req和ctx.request.req，ctx.req和ctx.response.res同时保存
    createContext(req, res) {
        let ctx = Object.create(context)
        ctx.request = Object.create(request)
        ctx.response = Object.create(response)

        ctx.req = ctx.request = req
        ctx.res = ctx.response = res
        return ctx
    }
    compose(middlewares) {
        // 需要传入ctx
        return function (ctx) {
            function dispatch(i) {
                let fn = middlewares[i]
                if (!fn) {
                    return Promise.resolve()
                }
                return Promise.resolve(
                    fn(ctx, function next() {
                        return dispatch(i + 1)
                    })
                )
            }
            return dispatch(0)
        }
    }
}
module.exports = Koa