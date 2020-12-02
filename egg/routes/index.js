module.exports = app=>({
    // 需要传递app实例并访问其$ctrl中暴露的控制器
    "get /": app.$ctrl.home.index,
    "get /detail": app.$ctrl.home.detail
    // 'get /': async ctx => {
    //     ctx.body = '⾸⻚'
    // },
    // 'get /detail': ctx => {
    //     ctx.body = '详情⻚⾯'
    // }
})