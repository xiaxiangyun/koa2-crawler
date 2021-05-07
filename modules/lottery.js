/**
 * Created by xxy on 2021/3/9.
 * 实体模型
 */

const { DataTypes } = require('sequelize')
const db = require('../config/db') // 引入mysql的配置文件
const Sequelize = db.sequelize // 引入sequelize对象
const Lottery = require('../schema/lottery')(Sequelize, DataTypes) // 引入数据表模型
Lottery.sync({ force: false }) // 自动创建表

class LotteryModel {
  /**
   * 添加开奖信息
   * @param data
   * @returns {Promise<*>}
   */
  static async addWinning(data) {
    return await Lottery.create({
      type: data.type, // 彩票类型
      name: data.name, // 彩票名
      issue: data.issue, // 期数
      number: data.number, // 中奖号码-前区
      numberBlue: data.numberBlue, // 中奖号码-后区
      openingTime: data.openingTime, // 开奖时间
    })
  }

  /**
   * 获取所有彩票最新的开奖信息
   * @returns {Promise<Model>}
   */
  static async getWinningList() {
    /* return await Lottery.findOne({
      where: {
        id
      }
    }) */
  }
}

module.exports = LotteryModel