module.exports = async (ctx, next) => {
    console.log('我是中间件start '+ctx.method + " " + ctx.path);
    const start = new Date();
    await next();
    const duration = new Date() - start;
    console.log(
        '我是中间件end '+ctx.method + " " + ctx.path + " " + ctx.status + " " + duration +
        "ms"
    );
};