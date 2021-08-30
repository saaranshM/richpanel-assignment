const client = require("../redis");

const getPageAccessTokenFromRedis = () => {
  return new Promise((resolve, reject) => {
    client.GET("PAGE_ACCESS_TOKEN", function (error, result) {
      if (error) reject(new Error("redis-set-error"));
      resolve(result);
    });
  });
};

module.exports = getPageAccessTokenFromRedis;
