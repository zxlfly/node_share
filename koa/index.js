const Koa = require('./koa')
const Router = require('./router')
const static = require('./static')

const fs = require('fs')
const app = new Koa()
const router = new Router();
router.get('/index', async ctx => { ctx.body = 'index page'; });
router.get('/post', async ctx => { ctx.body = 'post page'; });
router.get('/list', async ctx => { ctx.body = 'list page'; });
router.post('/index', async ctx => { ctx.body = 'post page'; });
router.get('/img', async ctx => { 
    ctx.body=fs.readFileSync('./index.html')
 });
app.use(router.routes());
app.use(static(__dirname + '/public'));
app.use(require("./iptable"));
// app.use(async (ctx, next) => {
//     ctx.body = "1";
//     await next();
//     ctx.body += "5";
// });
// app.use(async (ctx, next) => {
//     ctx.body += "2";
//     await delay();
//     await next();
//     ctx.body += "4";
// });
// app.use(async (ctx, next) => {
//     ctx.body += "3";
// });

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

