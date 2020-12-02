const http = require('http')
http.createServer((req,res)=>{
    if(req.url==='/favicon.ico'){
        res.end('')
        return
    }
    // 观察cookie存在 
    console.log('cookie:', req.headers.cookie) 
    // 设置cookie 浏览器会自动设置 下次访问headers里面会带上
    res.setHeader('Set-Cookie', 'cookie1=abc;');res.end('hello cookie!!')
}).listen(3000)