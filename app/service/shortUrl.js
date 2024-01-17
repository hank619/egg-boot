const Service = require("egg").Service;
const { generateRandomString } = require("../utils/random");

class ShortUrlService extends Service {
  async existsInDb(key) {
    const ctx = this.ctx;

    const record = await ctx.model.ShortUrl.findOne({
      where: {
        key,
      },
    });
    return !!record;
  }

  async create(url) {
    const ctx = this.ctx;
    let key;
    do {
      key = generateRandomString();
    } while (await this.existsInDb(key));
    await ctx.model.ShortUrl.create({
      key,
      rawUrl: url,
    });
    return key;
  }

  async show(key) {
    const ctx = this.ctx;
    const record = await ctx.model.ShortUrl.findOne({
      where: {
        key,
      },
    });

    return record?.rawUrl ?? "";
  }
}

module.exports = ShortUrlService;
