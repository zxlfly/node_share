module.exports = async function (ctx, next) {
    const { res, req } = ctx;
    const blackList = ['127.0.0.1'];
    const ip = getClientIP(req);
    //出现在黑名单中将被拒绝
    if (blackList.includes(ip)) {
        ctx.body = "not allowed";
    } else {
        await next();
    }
};
function getClientIP(req) {
    let ip =req.headers["x-forwarded-for"] || // 判断是否有反向代理 IP
    req.connection.remoteAddress || // 判断 connection 的远程 IP
    req.socket.remoteAddress || // 判断后端的 socket 的 IP
    req.connection.socket.remoteAddress

    if(ip.indexOf('::ffff:')===0){
        ip=ip.substring(7)
    }
    return ip;
}
