(async()=>{
    const { MongoClient:MongoDB } = require('mongodb')
    // 创建客户端
    const client = new MongoDB("mongodb://localhost:27017",{
        // 这个属性会在url里识别验证用户所需的db
        useNewUrlParser:true
    })
    let ret 
    // 创建连接
    ret = await client.connect()
    console.log('ret:',ret);
    const db = client.db('test')
    const fruits =db.collection('fruits')
    // 添加文档
    ret = await fruits.insertOne({
        name:'葡萄',
        price:20.1
    })
    ret = await fruits.insertOne({
        name:'芒果',
        price:20
    })
    ret = await fruits.insertOne({
        name:'菠萝',
        price:20
    })
    console.log('插入成功：',JSON.stringify(ret));
    // 查询文档
    // 更新的操作符$set
    ret = await fruits.updateOne(
        {name:'芒果'},
        {$set:{name:'香蕉'}}
    )
    // 删除文档 
    ret = await fruits.deleteOne({name: '菠萝'})
    // 删除
    // await fruits.deleteMany() 
    // client.close()
})()