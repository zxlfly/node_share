const conf = require('./conf')
const { EventEmitter } = require('events')

const { MongoClient } = require('mongodb')
// 初始化 连接
class Mongodb {
    constructor(conf) {
        this.conf = conf
        this.emmiter = new EventEmitter()
        // 连接
        this.client = new MongoClient(conf.url, {
            useNewUrlParser: true
        })
        this.client.connect(err => {
            if (err) throw err
            console.log('连接成功')
            this.emmiter.emit('connect')
        })

        
    }
    // 查询
    col(colName, dbName = conf.dbName){
        return this.client.db(dbName).collection(colName)
    }
    // 订阅函数
    once(event,cb){
        this.emmiter.once(event,cb)
    }
}

module.exports = new Mongodb(conf)