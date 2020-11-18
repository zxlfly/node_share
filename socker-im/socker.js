const net = require('net')
const chatServer = net.createServer()
// 存储接入客户端
const clientList = []
// 监听接入事件
chatServer.on('connection',client=>{
    // 接入后打个招呼
    client.write('Hi!/n')
    // 添加到客户端列表
    clientList.push(client)
    //客户端发送消息 进行广播
    client.on('data',data=>{
        clientList.forEach(v=>{
            v.write(data)
        })
    })
})
chatServer.listen(5000)
// 客户端连接
//telnet localhost 5000