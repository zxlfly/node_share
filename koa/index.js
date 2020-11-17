const Koa = require('./koa')

const app = new Koa()

// app.use((req, res) => {
//     res.writeHead(200);
//     res.end("hi koa");
// });
// app.use(ctx=>{
//     ctx.body = 'hehe'
// })

app.use(async (ctx, next) => {
    ctx.body = "1";
    await next();
    ctx.body += "5";
});
app.use(async (ctx, next) => {
    ctx.body += "2";
    await delay();
    await next();
    ctx.body += "4";
});
app.use(async (ctx, next) => {
    ctx.body += "3";
});

app.listen(3000, () => {
    console.log("监听端口3000");
});
function delay() {
    return new Promise((reslove, reject) => {
        setTimeout(() => {
            reslove();
        }, 2000);
    });
}

