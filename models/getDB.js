const fs = require("fs");
const path = require("path");
exports.getDB = () => {
  try {
    const data = fs.readFileSync(
      path.join(__dirname, "../", "db", "sample.json")
    );
    return JSON.parse(data);
  } catch (err) {
    console.error(err);
  }
};
