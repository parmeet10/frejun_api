const wrapperService = require("./wrapper");
const status = require("../configs/status");

const blogModels = require("../models/blogs");

const createBlog = async (params) => {
  if (!params.title || !params.body || !params.category) {
    throw new Error("input_missing");
  }

  let blogParams = {};
  blogParams.title = params.title;
  blogParams.category = params.category;
  blogParams.body = params.body;

  const blogId = await blogModels.createBlog(blogParams);

  let response = status.getStatus("success");
  response.data = {};
  response.data.blogId = blogId;

  return response;
};

const getBlogs = async (params) => {
  let blogParams = {};
  params.blogId ? (blogParams.blogId = params.blogId) : null;

  const result = await blogModels.getBlogs(blogParams);

  let response = status.getStatus("success");
  response.data = {};
  response.data.blogs = result;

  return response;
};

module.exports = {
  createBlog: wrapperService.wrap(createBlog),
  getBlogs: wrapperService.wrap(getBlogs),
};
