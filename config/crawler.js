/**
 * Created by xxy on 2021/3/5.
 * 爬虫相关配置
 */
const superagent = require('superagent')

// 配置项
const config = {
  timeout: 100, // ajax时间间隔
  asyncNum: 5, // 并发数目限制
  header: {
    "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8",
    "Accept-Encoding": "gzip, deflate, br",
    "Accept-Language": "zh-CN,zh;q=0.8",
    "Cache-Control": "max-age=0",
    "Connection": "keep-alive",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/61.0.3163.79 Safari/537.36",
  },
}

/**
 * get方法
 * @param {*} url 
 * @param {*} queryParams 
 * @returns 
 */
function get(url, queryParams) {
  return new Promise((reslove, reject) => {
    superagent
      .get(url)
      .set(config.header)
      .query(queryParams)
      .end((err, result) => {
        err ? reject(err) : reslove(result)
      })
  })
}

/**
 * post方法
 * @param {*} url 
 * @param {*} queryParams 
 * @returns 
 */
function post(url, queryParams) {
  return new Promise((reslove, reject) => {
    superagent
      .post(url)
      .set(config.header)
      .query(queryParams)
      .end((err, result) => {
        err ? reject(err) : reslove(result)
      })
  })
}

/**
 * 休眠函数
 * @param {*} time 
 * @returns 
 */
async function sleep(time) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(null)
    }, time)
  })
}

module.exports = {
  config,
  get,
  post,
  sleep
}