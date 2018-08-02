/**
 * restful api 子路由
 */

const router = require('koa-router')()
const articleController = require('../controllers/article');

const routers = router
  .post('/articles', articleController.getArticlesByPage)
  .get('/article/:id', articleController.getArticleById)
  .get('/category/articles', articleController.getArticlesSortByCategory)

module.exports = routers
