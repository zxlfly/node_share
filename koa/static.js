// 静态文件服务
const fs = require("fs");
const path = require("path");
module.exports = (dirPath = "./public") => {
    return async (ctx, next) => {
        // 请求url以public开头代表读取静态文件
        if (ctx.url.indexOf("/public") === 0) {
            // 获取文件绝对路径
            const url = path.resolve(__dirname, dirPath);
            // 获取文件名
            const fileBaseName = path.basename(url);
            // 获取真实路径
            const filepath = url + ctx.url.replace("/public", "");
            console.log(filepath);
            // console.log(ctx.url,url, filepath, fileBaseName)
            try {
                // 获取文件信息
                stats = fs.statSync(filepath);
                // 是文件目录
                if (stats.isDirectory()) {
                    // 目录
                    const dir = fs.readdirSync(filepath);
                    const ret = ['<div style="padding-left:20px">'];
                    dir.forEach(filename => {
                        console.log(filename);
                        // 简单认为不带小数点的格式，就是文件夹，实际应该用statSync
                        if (filename.indexOf(".") > -1) {
                            ret.push(
                                `<p><a style="color:black" href="${ctx.url
                                }/${filename}">${filename}</a></p>`
                            );
                        } else {
                            // 文件
                            ret.push(
                                `<p><a href="${ctx.url}/${filename}">${filename}</a></p>`
                            );
                        }
                    });
                    ret.push("</div>");
                    ctx.body = ret.join("");
                } else {
                    // 文件直接返回
                    console.log("文件");
                    const content = fs.readFileSync(filepath);
                    ctx.body = content;
                }
            } catch (e) {
                // 报错了 文件不存在
                ctx.body = "404, not found";
            }
        } else {
            // 否则不是静态资源，直接去下一个中间件
            await next();
        }
    };
};
