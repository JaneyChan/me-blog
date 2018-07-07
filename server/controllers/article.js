const articleService = require('../services/article');
const handle = require('../utils/handle');
const utils = require('../utils/common');

class ArticleController {
	/**
	 * 获取文章列表
	 */
    static async getArticles(ctx) {
        let result = {
            success: false,
            message: '',
            data: null,
            code: '0'
        }
        let articleResult = await articleService.getArticles()

        if (articleResult) {
            result.success = true;
            result.data = articleResult;
        } else {
            result.code = '';
            result.message = result.message.FAIL_USER_NO_EXIST;
        }
        ctx.body = result;
    }

    /**
     * 
     * @param {*} ctx 
     */
    static async createArticle(ctx) {
        let result = {
            success: false,
            message: '',
            data: null,
            code: ''
        }
        let currentTime = new Date().getTime();
        let articleResult = await articleService.createArticle({
            title: utils.parseTime(currentTime, 'yyyy-MM-dd'),
            createTime: currentTime,
            updateTime: currentTime
        })

        if (articleResult) {
            result.success = true;
            result.data = articleResult;
        } else {
            result.code = 'FAIL_USER_NO_EXIST';
            result.message = handle.message.FAIL_USER_NO_EXIST;
        }
        ctx.body = result;
    }

    /**
     * 
     * @param {*} ctx 
     */
    static async updateArticle(ctx) {
        let formData = ctx.request.body
        let result = {
            success: false,
            message: '',
            data: null,
            code: ''
        }
        let articleResult = await articleService.updateArticle({
            title: formData.title,
            publish: parseInt(formData.publish) || 0,
            content: formData.content,
            updateTime: new Date().getTime(),
        }, formData.id)

        if (articleResult) {
            result.success = true;
            result.data = articleResult;
        } else {
            result.code = 'FAIL_USER_NO_EXIST';
            result.message = handle.message.FAIL_USER_NO_EXIST;
        }
        ctx.body = result;
    }
}

module.exports = ArticleController;