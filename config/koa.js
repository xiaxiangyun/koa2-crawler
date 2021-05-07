/**
 * Created by xxy on 2021/3/5.
 * koa中间件配置
 */
const Koa = require('koa')
const convert = require('koa-convert')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const cors = require('koa-cors')
const router = require('../routes/index')

const app = new Koa()

app.use(convert.compose(
  // koaBody({ multipart: true }),
  bodyparser({
    enableTypes: ['json', 'form', 'text']
  }),
  json(),
  logger(),
  cors(),
))

// routes
app.use(router.routes(), router.allowedMethods())

// error handler
onerror(app)

module.exports = app
