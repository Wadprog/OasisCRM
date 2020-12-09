/**
 *
 * All Function that are too small to be their own modules
 */

//Dependencies
const config = require("./config");
const mongoose = require("mongoose");

const helper = {};

helper.connectDB = async () => {
  const DB_URI = config.DB_URI;
  if (DB_URI) {
    try {
      const OPTIONS = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
      };
      await mongoose.connect(DB_URI, OPTIONS);
      helper.success("Mongo db connected successfully ");
    } catch (error) {
      const ERR_MSG = error.message;
      helper.error({ ERR_MSG });
      process.exit(1);
    }
  } else {
    helper.error(" There is not database URI ");
    helper.error({ DB_URI });
    process.exit(1);
  }
};

helper.log = (msg, type, symbol = null) => {
  const black = "\x1b[30m";
  const red = "\x1b[31m";
  const green = "\x1b[32m";
  const yellow = "\x1b[33m";
  const blue = "\x1b[34m";
  let colorCode = "\x1b[31m%s\x1b[0m";
  switch (type.toUpperCase()) {
    case "ERROR":
      colorCode = red;
      break;
    case "INFO":
      colorCode = blue;
      break;
    case "SUCCESS":
      colorCode = green;
      break;
    case "WARNING":
      colorCode = yellow;
      break;
    default:
      colorCode = black;
      break;
  }
  if (symbol) console.log(symbol, colorCode, msg);
  else console.log(colorCode, msg);
};
helper.error = msg => helper.log(msg, "ERROR", "❌");
helper.info = msg => helper.log(msg, "INFO", "ℹ️ ");
helper.success = msg => helper.log(msg, "SUCCESS", "✅");
helper.warning = msg => helper.log(msg, "WARNING", "🚧");
module.exports = helper;
