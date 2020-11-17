// 响应对象 主要是关于body的get set
module.exports={
    get body(){
        return this._body
    },
    set body(val){
        this._body=val
    }
}