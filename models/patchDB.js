const fs = require("fs");
const path = require("path");

exports.patchDB = (data, patchId, newBlog) => {
  data_ar = [...data.data];
  data_ar[data_ar.findIndex(({ id }) => Number(id) === Number(patchId))] = {
    id: data.lastId,
    ...newBlog,
  };
  dataObj = { ...data, data: data_ar, lastId: data.lastId + 1 };
  try {
    fs.writeFileSync(
      path.join(__dirname, "../", "db", "sample.json"),
      JSON.stringify(dataObj)
    );
  } catch (err) {
    throw err;
  }
};
