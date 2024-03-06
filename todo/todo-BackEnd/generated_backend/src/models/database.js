const { DB_URL } = process.env;
const mongoose = require("mongoose");
let conn = mongoose.connect(DB_URL);
module.exports = {
  /**
   * Singleton-like Database Object that connects to the mongodb database
   */
  async getDbo() {
    if (!conn.isConnected()) await conn.connect();
    console.log("DB is Connected");
    return conn.db();
  },
};
