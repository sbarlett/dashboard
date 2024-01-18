const withTM = require("next-transpile-modules")([
  "@mui/x-charts",
  "@mui/material",
]);

module.exports = withTM({
  experimental: {
    appDir: false,
  },
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: "/api/data",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "false" },
          {
            key: "Access-Control-Allow-Origin",
            value:
              "https://api-serveless-vercel-nrtq2ff7h-sbaletta23.vercel.app https://api-serveless-vercel-nrtq2ff7h-sbaletta23.vercel.app/api/data",
          },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET,DELETE,PATCH,POST,PUT",
          },
          {
            key: "Access-Control-Allow-Headers",
            value:
              "Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date",
          },
        ],
      },
    ];
  },
});
