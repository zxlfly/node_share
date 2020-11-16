const http = require('http')
const fs = require('fs')
const server = http.createServer((request, response) => {
    // 访问localhost:4000的时候返回index.html
    const { url, method, headers } = request
    console.log(url);
    if (url === '/' && method === 'GET') {
        fs.readFile('index.html', (err, data) => {
            if (err) {
                response.writeHead(500, {
                    'Content-Type': 'text/plain;charset=utf-8'
                })
                response.end('500,服务器错误')
                return
            } else {
                response.statusCode = 200
                response.setHeader('Content-Type', 'text/html')
                response.end(data)
            }
        })
    } else if (url === '/ssss.jpg' && headers.accept.indexOf('image/*')!==-1){
        // 这种以文件读取的形式并不好，如果图片很大将消耗过多的服务器资源，可以使用流的形式解决
        fs.readFile('ssss.jpg', (err, data) => {
            if (err) {
                response.writeHead(500, {
                    'Content-Type': 'text/plain;charset=utf-8'
                })
                response.end('500,服务器错误')
                return
            } else {
                response.statusCode = 200
                response.end(data)
            }
        })
        // 流的形式
        // fs.createReadStream('.'+url).pipe(response)
        // request, response 都是流，可以答应原型链查看
    } else {
        response.statusCode = 404;
        response.setHeader('Content-Type', 'text/plain;charset=utf-8');
        response.end('404, 页面没有找到');
    }
})
server.listen(4000)