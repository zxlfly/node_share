// 实现路由功能 策略模式
class Router{
    constructor(){
        this.stack=[]
    }
    // 注册策略
    register(path,method,middleware){
        let route = {path,method,middleware}
        this.stack.push(route)
    }
    //我们的简化版本只实现了get、post
    get(path,middleware) {
        this.register(path,'GET',middleware)
    }
    post(path,middleware) {
        this.register(path,'POST',middleware)
    }
    // 注册完成之后，使用的时候就是通过path进行匹配
    routes(){
        let stock = this.stack
        return async function(ctx,next){
            let currentPath = ctx.url
            let route
            for (let i = 0; i < stock.length; i++) {
                let item = stock[i]
                // 通过path和method判断是否匹配
                if(currentPath===item.path&&item.method.indexOf(ctx.method)>=0){
                    
                    route=item.middleware
                    break
                }
            }
            if(typeof route ==='function'){
                route(ctx,next)
                return
            }
            await next()
        }
    }
}
module.exports=Router