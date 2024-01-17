/*
 * @Author: Hong.Zhang
 * @Date: 2024-01-12 14:53:46
 * @Description:
 */
const Controller = require("egg").Controller;

const createRule = {
  url: "string",
};

class UserController extends Controller {
  async create() {
    const { config, ctx } = this;
    ctx.validate(createRule, ctx.realStatus.body);
    const { url } = ctx.request.body;
    const key = await ctx.service.shortUrl.create(url);
    ctx.success(`${config.serverUrl}/${key}`);
  }

  async show() {
    const key = this.ctx.params.id;
    const url = await this.service.shortUrl.show(key);
    this.ctx.redirect(url);
  }
}

module.exports = UserController;
