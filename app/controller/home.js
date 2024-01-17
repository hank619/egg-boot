const { Controller } = require("egg");
const fs = require("fs");
const path = require("path");

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.response.type = "html";
    // only suggest for SPA that has only one route, if not, you will need to handle SPA route and eggjs route
    ctx.body = fs.readFileSync(path.resolve(__dirname, "../public/index.html"));
  }
}

module.exports = HomeController;
