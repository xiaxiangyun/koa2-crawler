/**
 * Created by xxy on 2021/3/5.
 * 爬虫任务入口
 */
const schedule = require('node-schedule')
const moment = require('moment')
const ssq = require('./ssq')

function createTask() {
  // 定义双色球查询任务规则
  let ruleSsq = new schedule.RecurrenceRule()
  ruleSsq.dayOfWeek = [0, 2, 4]
  ruleSsq.hour = 21
  ruleSsq.minute = 20

  // 查询最新的双色球开奖结果
  schedule.scheduleJob(ruleSsq, async function () {
    console.log('开始查询双色球开奖信息!', moment().format('YYYY-MM-DD HH:mm:ss'))
    await ssq.getWinning()
    console.log('双色球开奖信息数据更新完成！', moment().format('YYYY-MM-DD HH:mm:ss'))
  })
}

module.exports = {
  createTask
}