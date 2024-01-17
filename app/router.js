/**
 * @param {Egg.Application} app - egg application
 */
module.exports = (app) => {
  const { router, controller } = app;
  router.resources("short-url", "/api/v1/short-url", controller.shortUrl);
  router.get("*", controller.home.index);
};
