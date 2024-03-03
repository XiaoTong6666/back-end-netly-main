// 引入 createVLESSServer 函数
const { createVLESSServer } = require("@3kmfi6hp/nodejs-proxy");
// 定义端口和 UUID
const port = 80;
const uuid = "509992ab-994a-5866-ac58-038aaef4fafc";

// 调用函数启动 VLESS 服务器
createVLESSServer(port, uuid);
