import http from "node:http";
import next from "next";

const hostname = process.env.HOSTNAME || "127.0.0.1";
const port = Number(process.env.PORT || 3000);
const app = next({ dev: true, hostname, port });
const handle = app.getRequestHandler();

await app.prepare();

http
  .createServer((request, response) => {
    handle(request, response);
  })
  .listen(port, hostname, () => {
    console.log(`NetCulture dev server ready on http://${hostname}:${port}`);
  });
