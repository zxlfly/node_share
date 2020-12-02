const { read } = require("fs")
const http = require("http")
/**
 * 1.服务器在接受客户端首次访问时，在服务端创建session，然后保存，再给这个session生成一个唯一的标识，然后在响应头中种下这个标识（可加密，非必须）
 * 2.浏览器收到响应后将标识保存在本地cookie中，下次访问时请求头会带上
 * 3.服务器在就收到客户端请求时会解析cookie种的标识，然后在服务器端保存的session中查找读取，进而做相关操作
 */
const session = {}
http.createServer((req, res) => {
    // 观察cookie存在 
    console.log('cookie:', req.headers.cookie)
    const sessionKey = 'id'
    const cookie = req.headers.cookie
    if (cookie && cookie.indexOf(sessionKey) > -1) {
        res.end('Come Back ')
        const pattern = new RegExp(`${sessionKey}=([^;]+);?\s*`) 
        const sid = pattern.exec(cookie)[1]
        console.log('session:', sid, session, session[sid])
    } else {
        const sid = (Math.random() * 99999999).toFixed()
        // 设置cookie
        res.setHeader('Set-Cookie', `${sessionKey}=${sid};`)
        session[sid] = { name: 'laowang' }
        res.end('Hello')
    }
    res.end('hello cookie!!')
}).listen(3000)