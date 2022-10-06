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

const updateBlogs = async (params) => {
  if (!params.blogId) {
    throw new Error("input_missing");
  }

  let blogParams = {};
  blogParams.blogId = params.blogId;

  let blog = await getBlogs(blogParams);

  if (blog.code !== "success" || blog.data.blogs.length == 0) {
    throw new Error("authn_fail");
  }

  let wordsWithA = [];
  let _arr = blog.data.blogs[0].body.split(" ");
  for (let word of _arr) {
    let char = word.split("");
    if (char[0] === "a" || char[0] === "A") {
      wordsWithA.push(word);
    }
  }

  let response = status.getStatus("success");
  response.data = {};
  response.data.wordsWithA = wordsWithA;
  response.data.blogs = blog.data.blogs;

  return response;
};

module.exports = {
  createBlog: wrapperService.wrap(createBlog),
  getBlogs: wrapperService.wrap(getBlogs),
  updateBlogs: wrapperService.wrap(updateBlogs),
};
