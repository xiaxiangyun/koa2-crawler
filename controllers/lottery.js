/**
 * Created by xxy on 2021/3/8.
 * 彩票控制器
 */
const LotteryModel = require("../modules/lottery")
const SsqModel = require("../modules/ssq")

class LotteryController {
  /**
   * 添加彩票开奖数据
   * @param ctx
   * @returns {Promise.<void>}
   */
  static async addData(ctx) {
    let req = ctx.request.body
    if (req.type && req.issue && req.number) {
      try {
        await LotteryModel.addWinning(req)
        switch (req.type) {
          case 'ssq':
            await SsqModel.add(req)
            break
          default:
            console.log('不存在的类型！')
            break
        }
        ctx.response.status = 200
        ctx.body = {
          code: 200,
          msg: '添加开奖数据成功！'
        }
      } catch (err) {
        ctx.response.status = 200
        ctx.body = {
          code: 500,
          msg: '添加开奖数据失败！',
          data: err
        }
      }
    } else {
      ctx.response.status = 200
      ctx.body = {
        code: 400,
        msg: '参数错误！'
      }
    }
  }

  /**
   * 获取文章详情
   * @param ctx
   * @returns {Promise.<void>}
   */
  static async detail(ctx) {
    let id = ctx.params.id
    if (id) {
      try {
        // 查询文章详情模型
        let data = await ArticleModel.getArticleDetail(id)
        ctx.response.status = 200
        ctx.body = {
          code: 200,
          msg: '查询成功',
          data
        }
      } catch (err) {
        ctx.response.status = 412
        ctx.body = {
          code: 412,
          msg: '查询失败',
          data
        }
      }
    } else {
      ctx.response.status = 416
      ctx.body = {
        code: 416,
        msg: '文章ID必须传'
      }
    }
  }

  /**
   * 获取最新的开奖信息
   * @param ctx
   * @returns {Promise.<void>}
   */
  static async getLatest(ctx) {
    console.log('getLatest', ctx)
  }

  /**
   * 获取某彩种历史开奖信息
   * @param ctx
   * @returns {Promise.<void>}
   */
  static async getHistory(ctx) {
    console.log('getHistory', ctx)
  }

  /**
   * 获取某彩种某期开奖详情
   * @param ctx
   * @returns {Promise.<void>}
   */
  static async getWinningDetail(ctx) {
    console.log('getWinningDetail', ctx)
  }

  /**
   * 查询输入号码是否存在于历史开奖号码中
   * @param ctx
   * @returns {Promise.<void>}
   */
  static async checkWinning(ctx) {
    console.log('checkWinning', ctx)
  }

}

module.exports = LotteryController