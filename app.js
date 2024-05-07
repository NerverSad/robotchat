// 后端 Node.js 代码，使用 Koa 框架

const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const router = require('koa-router')();
const cors = require('@koa/cors');
const app = new Koa();
const port = 3001;

// 解析请求体中的 JSON 数据
app.use(bodyParser());

// 处理跨域
app.use(cors());

// 处理用户发送的消息
router.post('/sendMessage', async (ctx) => {
    const userMessage = ctx.request.body.message;

    // 模拟机器人思考中...
    await new Promise(resolve => setTimeout(resolve, 1000)); // 模拟1秒的思考时间
    ctx.body = `你好，我收到了你的消息"${userMessage}"，正在思考中...`;
});

// 注册路由
app.use(router.routes());

// 启动后端服务器
app.listen(port, () => {
    console.log(`后端服务器运行在 http://localhost:${port}`);
});
