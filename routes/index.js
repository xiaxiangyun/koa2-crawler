/**
 * Created by xxy on 2021/3/5.
 * 后台接口相关路由配置
 */
const Router = require('koa-router')
const lottery = require('./lottery')

const router = new Router({
  prefix: '/api'
})

router.use('/lottery', lottery.routes(), lottery.allowedMethods())

module.exports = router