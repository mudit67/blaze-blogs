const path = require("path");
const fs = require("fs");

exports.postDB = (data, appendObj) => {
  var data_ = { data: [...data.data, { id: data.lastId+1, ...appendObj }],lastId:data.lastId+1 };
  try {
    
    fs.writeFileSync(
      path.join(__dirname, "../", "db", "sample.json"),
      JSON.stringify(data_)
    );
  } catch (err) {
    throw err;
  }
};
