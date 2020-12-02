const koa = require("koa");
const { initRouter,initController,initService,loadConfig,initSchedule } = require("./loader");
class egg {
    constructor(conf) {
        this.$app = new koa(conf);
        initSchedule()
        loadConfig(this)
        this.$service=initService(this)
        this.$ctrl = initController(this)
        this.$router = initRouter(this);
        this.$app.use(this.$router.routes());
    }
    start(port) {
        this.$app.listen(port, () => {
            console.log("服务器启动成功，端⼝:" + port);
        });
    }
}
module.exports = egg;