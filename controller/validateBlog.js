exports.validateNew = (reqBody) => {
  console.log(reqBody.author, reqBody.content);
  if (reqBody.author && reqBody.content) {
    return true;
  }
  return false;
};
