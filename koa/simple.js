//简版koa的基本架子
const http = require("http");
class Koa {
    listen(...args) {
        const server = http.createServer((req, res) => {
            this.callback(req, res);
        });
        server.listen(...args);
    }
    use(callback) {
        this.callback = callback;
    }
}

const app = new Koa();
app.use((req, res) => {
    res.writeHead(200);
    res.end("hi koa");
});
app.listen(3000, () => {
    console.log("监听端口3000");
});