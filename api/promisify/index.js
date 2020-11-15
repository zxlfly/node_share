const fs = require("fs")

// 同步
// const data  = fs.readFileSync("./test.json");
// console.log('同步读取data',data.toString());

// 异步
// const data  = fs.readFile("./test.json",(err,data)=>{
//     if(err) throw err
//     console.log('异步读取data',data.toString());
// });

// 我写代码有个习惯可以不写分号的我一定不写，但是这里得写不然会报错
// TypeError: require(...) is not a function
// promisify可以让我们很方便的把原来异步回调的方法改成promise的形式
const { promisify } = require("util");
(async () => {
    const readFile = promisify(fs.readFile)
    const data = await readFile("./test.json")
    console.log('promisify方式读取data', data.toString());
})()
// promisify实现原理很简单，因为node中异步回调有一个约定，错误优先，也就是说回调函数的第一个参数要是错误对象，其余的才是正确时的数据。我们只需要在第一个参数有值的情况下，触发reject，其余情况下触发resolve即可
// 一个简单的实现代码：mypromisify
function mypromisify(fn) {
    return function (...args) {
        return new Promise(function (resolve, reject) {
            args.push(function(err,...datas){
                if (err) {
                    reject(err)
                } else {
                    resolve(datas)
                }
            })
            // 这里用apply是为了args直接以数组的形式当参数传入
            // 当异步操作执行完成就会触发上面传入的if else
            fn.apply(null, args)
        })
    }
}