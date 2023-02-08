const { createProxyMiddleware } = require("http-proxy-middleware");

console.log("1");
module.exports = function (app) {
  app.use(
    createProxyMiddleware("/kakao", {
      target: "https://place.map.kakao.com",
      pathRewrite: {
        "^/kakao": "",
      },
      changeOrigin: true,
    })
  );

  app.use(
    createProxyMiddleware("/api", {
      target: "http://i8a109.p.ssafy.io/api",
      pathRewrite: {
        "^/api": "",
      },
    })
  );

  // 웹 소켓 프록시 설정
  // const { createProxyMiddleware } = require("http-proxy-middleware");
  // module.exports = (app) => {
  //   app.use("/ws", createProxyMiddleware({ target: "http://localhost:9090/api", ws: true }));
  // };
<<<<<<< HEAD

=======
>>>>>>> e1c5a9a32ee676d63b7916a3650c99cc88fad4cc
};
