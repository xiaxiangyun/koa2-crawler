/**
 * Created by xxy on 2021/3/8.
 * 双色球开奖信息表模型实例
 */
 module.exports = function (sequelize, DataTypes) {
  return sequelize.define('ssq', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: true,
      autoIncrement: true
    },
    // 红球1
    red1: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'red1'
    },
    // 红球2
    red2: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'red2'
    },
    // 红球3
    red3: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'red3'
    },
    // 红球4
    red4: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'red4'
    },
    // 红球5
    red5: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'red5'
    },
    // 红球6
    red6: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'red6'
    },
    // 蓝球
    blue: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'blue'
    },
    // 彩票期数
    issue: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'issue'
    },
    // 开奖时间
    openingTime: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'openingTime'
    },
    // 本期销量
    sold: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'sold'
    },
    // 中奖合计
    winning: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'winning'
    },
    // 奖池金额
    pond: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'pond'
    },
    // 一等注数
    firstNum: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'firstNum'
    },
    // 一等金额
    firstMoney: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'firstMoney'
    },
    // 二等注数
    secondNum: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'secondNum'
    },
    // 二等金额
    secondMoney: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'secondMoney'
    },
    // 三等注数-3000
    thirdNum: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'thirdNum'
    },
    // 四等注数-200
    fourthNum: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'fourthNum'
    },
    // 五等注数-10
    fifthNum: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'fifthNum'
    },
    // 六等注数-5
    sixthNum: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'sixthNum'
    },
    // 创建时间
    createTime: {
      type: DataTypes.DATE
    },
    // 更新时间
    updateTime: {
      type: DataTypes.DATE
    }
  },
  {
    /**
     * 如果为true，则表示名称和model相同，即user
     * 如果为fasle，mysql创建的表名称会是复数，即users
     * 如果指定的表名称本身就是复数，则形式不变
     */
    freezeTableName: true
  })
}