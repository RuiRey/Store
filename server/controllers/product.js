const DB = require("../utils/db.js");

module.exports = {
  list: async ctx => {
    ctx.state.data = await DB.query("SELECT * FROM product;");
  }


}