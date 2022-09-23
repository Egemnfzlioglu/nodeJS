const Koa = require("koa");
const app = new Koa();

// response
app.use((ctx) => {
    if (ctx.url === "/") {
        ctx.status = 200;
        ctx.body = "<h1>Index Sayfası</h1>";
    }
    else if (ctx.url === "/about") {
        ctx.status = 200;
        ctx.body = "<h1>Hakkimda Sayfası</h1>";
    }
    else if (ctx.url === "/contact") {
        ctx.status = 200;
        ctx.body = "<h1>Iletisim Sayfası</h1>";
    }
    else {
        ctx.status = 404;
        ctx.body = "<h1>404 Sayfa Bulunamadı.</h1>.";
    }
});

app.listen(3000);