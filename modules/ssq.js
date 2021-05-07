/**
 * Created by xxy on 2021/3/9.
 * 实体模型
 */

const { DataTypes } = require('sequelize')
const db = require('../config/db') // 引入mysql的配置文件
const Sequelize = db.sequelize // 引入sequelize对象
const Ssq = require('../schema/ssq')(Sequelize, DataTypes) // 引入数据表模型
Ssq.sync({ force: false }) // 自动创建表

class SsqModel {
  /**
   * 添加双色球数据信息
   * @param data
   * @returns {Promise<*>}
   */
  static async add(data) {
    return await Ssq.create({
      red1: data.red1, // 红球1
      red2: data.red2, // 红球2
      red3: data.red3, // 红球3
      red4: data.red4, // 红球4
      red5: data.red5, // 红球5
      red6: data.red6, // 红球6
      blue: data.blue, // 蓝球
      name: data.name, // 彩票名
      issue: data.issue, // 期数
      number: data.number, // 中奖号码-前区
      numberBlue: data.numberBlue, // 中奖号码-后区
      openingTime: data.openingTime, // 开奖时间
    })
  }
}

module.exports = SsqModel