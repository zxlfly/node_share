import * as koa from "koa"
import koaBody from "koa-body"
import { nextTick } from "process"
import {get,post,middlewares} from "../untils/route-decors"
const users =[
    { name: 'q', age: 20 },
    { name: 'a', age: 20 },
    { name: 'z', age: 20 },
    { name: 'x', age: 20 },
    { name: 'c', age: 20 },
    { name: 'v', age: 20 },
]
@middlewares([async function (ctx,next) {
    if(ctx.header.token){
        await next()
    }else{
        throw '请登录'
    }
}])
export default class User{
    @get('/users')
    public list(ctx:koa.Context){
        ctx.body={
            code:200,
            data:users
        }
    }
    @post('/users',{
        middlewares:[
            async function validation(ctx,next) {
                // 用户名必填
                const name = ctx.request.body.name
                if(!name){
                    throw '请输入姓名'
                }
                await next()
            }
        ]
    })
    public add(ctx:koa.Context){
        users.push(ctx.request.body);
        ctx.body={
            code:200,
            data:null
        }
    }
}