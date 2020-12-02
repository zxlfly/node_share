// module.exports = {
//     index: async ctx => {
//         ctx.body = "⾸⻚ctrl";
//     },
//     detail: ctx => {
//         ctx.body = "详情⻚⾯ctrl";
//     }
// }
module.exports = (app) => ({
    // index: async ctx => {
    //     // ctx.body = 'Ctrl Index'
    //     console.log('index ctrl')
    //     const name = await app.$service.user.getName()
    //     app.ctx.body = 'ctrl user' + name

    // },
    index: async app => { // app已传递
        app.ctx.body = await app.$model.user.findAll()
    },
    detail: async ctx => {
        app.ctx.body = 'Ctrl Detal'
    }
})