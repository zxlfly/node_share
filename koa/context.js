// 上下文，挂载请求响应对象
module.exports={
    get url(){
        return this.request.url
    },
    get body(){
        return this.response.body
    },
    get method(){
        return this.request.method
    },
    set body(val){
        return this.response.body=val
    },
}