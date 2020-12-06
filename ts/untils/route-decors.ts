import * as glob from 'glob';
import * as Koa from 'koa';
import * as KoaRouter from 'koa-router';

const router = new KoaRouter()
type HTTPMethod = 'get' | 'put' | 'del' | 'post' | 'patch'; 
type LoadOptions = { 
    /*** 路由文件扩展名，默认值是`.{js,ts}` */ extname?: string; 
};
type RouteOptions = { 
    /*** 适用于某个请求比较特殊，需要单独制定前缀的情形 */ 
    prefix?: string; 
    /*** 给当前路由添加一个或多个中间件 */ middlewares?: Array<Koa.Middleware>; 
};
// 引用透明 更好的抽离解耦
const method =(router:KoaRouter)=> (method: HTTPMethod) => (path: String,options?:RouteOptions) => {
    return (target, prototype) => {
        // 由于类装饰器会先执行属性装饰器再执行类装饰器
        // 所以需要使用异步的方式让类装饰器先执行
        process.nextTick(()=>{
            const url = options && options.prefix ? options.prefix + path : path
            // 构建中间件数组
            const middlewares = []
            if(target.middlewares){
                middlewares.push(...middlewares)
            }
            if(options&&options.middlewares){
                middlewares.push(...options.middlewares)
            }
            middlewares.push(target[prototype])
            router[method](url, ...middlewares)
        })
    }
}
const dec = method(router)
export const get = dec('get')
export const post = dec('post')
export const middlewares = function middlewares(middlewares){
    return function(target){
        target.prototype.middlewares=middlewares
    }
}
export const load =(folder:string):KoaRouter=>{
    const extname ='.{js,ts}'
    // 获取绝对路径
    glob.sync(require('path').join(folder,`./**/*${extname}`)).forEach(item=>require(item))
    // 遍历完成之后所有的router加载完成
    return router
}