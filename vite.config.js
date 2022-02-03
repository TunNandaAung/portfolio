const { resolve } = require("path");
const { defineConfig } = require("vite");

function disableHistoryFallback() {
  const path = require("path");
  const fs = require("fs");

  const ALLOWLIST = [
    // internal requests
    /^\/__vite_ping/,
    /^\/@vite\/client/,
    /^\/@id/,
    /^\/__open-in-editor/,

    // no check needed
    /^\/$/,
    /^\/index.html/,
    /^\/favicons\/.*/,
    /^\/site.webmanifest/,
    /^\/robots.txt/,
    /^\/safari-pinned-tab.svg/,
    /^\/banner.png/,
  ];
  return {
    name: "disable-history-fallback",
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        // remove query params from url (e.g., cache busts)
        const url = req.url.split("?")[0];

        if (ALLOWLIST.some((pattern) => pattern.test(url))) {
          return next();
        }

        if (!fs.existsSync(path.join(__dirname, url))) {
          console.warn("URL not found:", url);
          res.statusCode = 404;
          res.setHeader("Content-type", "text/html");
          let html = fs.readFileSync(path.join(__dirname, "/404.html"));
          res.write(html);
          res.end();
        } else {
          next();
        }
      });
    },
  };
}

module.exports = defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        404: resolve(__dirname, "404.html"),
      },
    },
  },
  plugins: [disableHistoryFallback()],
});
