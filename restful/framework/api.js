module.exports = {
    // 根据list参数查找对应的模型
    async init(ctx, next) {
        console.log(ctx.params)
        const model = ctx.app.$model[ctx.params.list]
        if (model) {
            ctx.list = model
            await next()
        } else {
            ctx.body = 'Model does not exist'
        }
    },
    // 普通的get不带参
    async list(ctx) {
        ctx.body = await ctx.list.find({})

    },
    // 带id查询的get
    async get(ctx) {
        ctx.body = await ctx.list.findOne({ _id: ctx.params.id })

    },
    // 创建 post
    async create(ctx) {
        const res = await ctx.list.create(ctx.request.body)
        ctx.body = res
    },
    // 更新
    async update(ctx) {
        const res = await ctx.list.updateOne({ _id: ctx.params.id }, ctx.request.body)
        ctx.body = res
    },
    // 删除
    async del(ctx) {
        const res = await ctx.list.deleteOne({ _id: ctx.params.id })
        ctx.body = res
    },
    // 分页
    async page(ctx) {
        console.log('page...', ctx.params.page)
        ctx.body = await ctx.list.find({})/*  */
    },
    // 可以根据需要写一些通用的操作
}

