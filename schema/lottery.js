/**
 * Created by xxy on 2021/3/8.
 * 最新开奖表模型实例
 */
module.exports = function (sequelize, DataTypes) {
  return sequelize.define('lottery', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: true,
      autoIncrement: true
    },
    // 彩票类型
    type: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'type'
    },
    // 彩票名
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'name'
    },
    // 彩票期数
    issue: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'issue'
    },
    // 中奖号码-前区
    number: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'number'
    },
    // 中奖号码-后区
    numberBlue: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'numberBlue'
    },
    // 开奖时间
    openingTime: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'openingTime'
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