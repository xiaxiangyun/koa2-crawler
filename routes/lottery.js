/**
 * Created by xxy on 2021/3/5.
 * 彩票查询小程序相关接口
 */
const router = require('koa-router')()
const LotteryController = require('../controllers/lottery')

/**
 * 获取最新的开奖信息
 */
router.post('/latest', LotteryController.getLatest)

/**
 * 获取某彩种历史开奖信息
 * @param {} 1.type-彩票类型 2.pages-最近期数，默认10，可选30/50
 */
router.post('/history', LotteryController.getHistory)

/**
 * 获取某彩种某期开奖详情
 * @param {} 1.type-彩票类型 2.issue-彩票期数
 */
 router.post('/winningDetail', LotteryController.getWinningDetail)

/**
 * 查询输入号码是否存在于历史开奖号码中
 * @param {} 1.type-彩票类型 2.number-{ red:[], blue: [] }-彩票号码
 */
router.post('/checkWinning', LotteryController.checkWinning)

module.exports = router