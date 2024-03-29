/*
 * @Author: Hong.Zhang
 * @Date: 2024-01-12 14:53:46
 * @Description:
 */
const Controller = require("egg").Controller;
const { z } = require("zod");

const scheme = z.object({
  url: z.string(),
});

class ShortUrlController extends Controller {
  async create() {
    const ctx = this.ctx;
    scheme.parse(ctx.request.body);
    const { url } = ctx.request.body;
    const key = await ctx.service.shortUrl.create(url);
    ctx.success(`https://short-link.matrixyf.top/api/v1/short-url/${key}`);
  }

  async show() {
    const key = this.ctx.params.id;
    const url = await this.service.shortUrl.show(key);
    this.ctx.redirect(url);
  }
}

module.exports = ShortUrlController;
