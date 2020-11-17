# koa简版逻辑
- 一个基于nodejs的http服务
- 目的：简化、流程化、模块化方式实现部分回调
- context
  - 上下文简化api，将原始的请求对象和响应对象封装并挂载到context上，并且context上设置getter和setter简化操作
- 中间件
  - 函数聚合，将一组需要顺序执行的函数复合为一个函数，外层函数的参数是内层函数的返回值。就是俗称的洋葱圈模型（责任链模式）
  - 
- 路由：策略模式
  
## 函数组合
**基础版本**
```
const compose = (...[first,...other])=>(...args)=>{
    let rfn
    if(other.length>0){
        rfn = first(...args)
        other.forEach(fn=>{
            rfn = fn(rfn)
        })
    }else if(first){
        rfn = first(...args)
    }else{
        rfn = args=>args
    }
    return rfn
}
```
**中间件使用的版本**
compose.js-->具体实现