// 请求对象 返回url  method
module.exports={
    get url(){
        return this.req.url
    },
    get method(){
        return this.req.method.toLowerCase()
    }
}