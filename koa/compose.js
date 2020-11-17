// 可以使用箭头函数
function compose(middlewares) {
    // 聚合函数 返回一个合成函数
    return function () {
        // 返回依次执行的执行承诺，即要考虑异步的情况
        function dispatch(i) {
            // 去除对应的中间件函数
            let fn = middlewares[i]
            // 如果不存在就返回空的执行承诺
            if (!fn) {
                return Promise.resolve()
            }
            // 存在就返回真实的执行承诺
            return Promise.resolve(
                // next下一级执行时候返回的执行承诺
                fn(function next() {
                    return dispatch(i + 1)
                })
            )
        }
        // 递归调用dispatch 从第一层也就是第一个中间件开始
        return dispatch(0)
    }
}
async function fn1(next) {
    console.log("fn1");
    await next();
    console.log("end fn1");
}
async function fn2(next) {
    console.log("fn2");
    await delay();
    await next();
    console.log("end fn2");
}
function fn3(next) {
    console.log("fn3");
}
function delay() {
    return new Promise((reslove, reject) => {
        setTimeout(() => {
            reslove();
        }, 2000);
    });
}
const middlewares = [fn1, fn2, fn3];
const finalFn = compose(middlewares);
finalFn();