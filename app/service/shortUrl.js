const Service = require("egg").Service;
const { generateRandomString } = require("../utils/random");
const prisma = require("../utils/prisma");

class ShortUrlService extends Service {
  async existsInDb(key) {
    const record = await prisma.shortUrl.findFirst({
      where: {
        key,
      },
    });
    return !!record;
  }

  async create(url) {
    let key;
    do {
      key = generateRandomString();
    } while (await this.existsInDb(key));
    await prisma.shortUrl.create({
      data: {
        key,
        rawUrl: url,
      },
    });
    return key;
  }

  async show(key) {
    const record = await prisma.shortUrl.findFirst({
      where: {
        key,
      },
    });

    return record?.rawUrl ?? "";
  }
}

module.exports = ShortUrlService;
