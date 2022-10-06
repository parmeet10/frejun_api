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

module.exports = {
  createBlog: wrapperService.wrap(createBlog),
};
