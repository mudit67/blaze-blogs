// imports
const fs = require("fs");
const path = require("path");

exports.delDB = (dataObj, delId) => {
  const dataObj_ = {
    ...dataObj,
    data: dataObj.data.filter(({ id }) => Number(id) !== Number(delId)),
  };
  try {
    fs.writeFileSync(
      path.join(__dirname, "../", "db", "sample.json"),
      JSON.stringify(dataObj_)
    );
  } catch (err) {
    throw err;
  }
};
