const wrapperService = require("../services/wrapper");

const blogService = require("../services/blogs");

const createBlog = async (req, res, next) => {
  if (!req.body.title || !req.body.body || !req.body.category) {
    throw new Error("input_missing");
  }

  let blogParams = {};
  blogParams.title = req.body.title;
  blogParams.body = req.body.body;
  blogParams.category = req.body.category;

  const result = await blogService.createBlog(blogParams);

  return res.json(result);
};

module.exports = {
  createBlog: wrapperService.wrap(createBlog),
};
