/* eslint valid-jsdoc: "off" */
const dbConfig = require("../database/config.json");

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = (appInfo) => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const appConfig = getAppConfig(appInfo);
  const userConfig = getUserConfig(appInfo);

  return {
    ...appConfig,
    ...userConfig,
  };
};

function getAppConfig(appInfo) {
  const config = (exports = {});

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + "xxxxx";

  // add your middleware config here
  config.middleware = [];

  // sequelize默认只会读取config.[env].js中的配置
  // 如果要使用sequelize-cli生成的/database/config.json中的配置，必须要这么做，单独配置一遍
  // sequelize
  config.sequelize = dbConfig[appInfo.env];

  // 默认会打开csrf，如果postman模拟的话，需要关闭这个
  config.security = {
    csrf: false,
  };

  // 全局配置unCaughtException统一错误处理，返回的格式跟ctx.fail保持一致
  config.onerror = {
    all(err, ctx) {
      const { status = 500, errors } = err;
      let message = err.message;
      if (status === 422) {
        message = errors;
      }
      ctx.body = JSON.stringify({
        success: false,
        message,
      });
      ctx.type = "application/json";
      ctx.status = status;
    },
  };

  config.notfound = {
    pageUrl: "/",
  };
  return config;
}

function getUserConfig() {
  const userConfig = {
    serverUrl: "https://my-server.com",
  };
  return userConfig;
}
