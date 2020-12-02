module.exports = {
    // "get /": async ctx => {
    //     ctx.body = "⽤户⾸⻚";
    // },
    // "get /info": ctx => {
    //     ctx.body = "⽤户详情⻚⾯";
    // }
    "get /": async (app) => {
        const name = await app.$service.user.getName();
        app.ctx.body = "⽤户:" + name;
    },
    "get /info": app => {
        app.ctx.body = "⽤户年龄：" + app.$service.user.getAge();
    }
};