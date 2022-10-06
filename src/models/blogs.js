const wrapperService = require("../services/wrapper");

const database = require("../database/sql");

const createBlog = async (params) => {
  if (!params.title || !params.body || !params.category) {
    throw new Error("input_missing");
  }

  let _insert = {
    title: params.title,
    body: params.body,
    category: params.category,
  };

  let createBlogQuery = database.knex.insert(_insert).into("blogs");

  let result = await createBlogQuery;
  return result[0];
};

const getBlogs = async (params) => {
  let getBlogsQuery = database.knex
    .select("b.id")
    .select("b.title")
    .select("b.category")
    .select("b.body")
    .select("b.active")
    .select("b.created_at")
    .from("blogs as b")
    .orderBy("b.created_at", "aesc");

  params.blogId ? getBlogsQuery.where("b.id", params.blogId) : null;

  let result = await getBlogsQuery;

  let _result = _translateToJson(result);

  return _result;
};

const updateBlogs = async (params) => {
  if (!params.blogId || !params.body) {
    throw new Error("input_missing");
  }

  let _update = { updated_at: new Date() };
  params.body ? (_update["body"] = params.body) : null;

  let updateBlogQuery = database
    .knex("blogs")
    .update(_update)
    .where("id", params.blogId);

  let result = await updateBlogQuery;

  return true;
};

const _translateToJson = (blogs) => {
  let blogIds = Array.from(new Set(blogs.map((blog) => blog.id)));

  let result = [];

  blogIds.forEach((blogId) => {
    let _blogs = blogs.filter((blog) => blog.id === blogId);
    let _blog = _blogs[0];

    let _result = {};
    _result.id = _blog.id;
    _result.title = _blog.title;
    _result.body = _blog.body;
    _result.category = _blog.category;
    _result.active = _blog.active;
    _result.created_at = _blog.created_at;

    result.push(_result);
  });

  return result;
};

module.exports = {
  createBlog: wrapperService.wrap(createBlog),
  getBlogs: wrapperService.wrap(getBlogs),
  updateBlogs: wrapperService.wrap(updateBlogs),
};
