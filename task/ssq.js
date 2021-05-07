/**
 * Created by xxy on 2021/3/5.
 * 双色球数据爬虫
 */
const cheerio = require('cheerio')
const crawler = require('../config/crawler')
const LotteryController = require('../controllers/lottery')

// 根据网站api得到相应的url和参数
const requestUrl = 'https://github.com/search'
const requestParams = {}

async function getWinning() {
  let result = await getData()
  // crawler.sleep()
  const { data } = result
  const msg = await LotteryController.addData(data)
  console.log(msg)
}

/**
 * 解析页面数据
 * @param {*} type 
 * @param {*} pageIndex 
 * @returns 
 */
async function getData(type, pageIndex) {
  let result = ''
  try {
    result = await crawler.get(requestUrl, requestParams)
    // TODO: 根据页面结构获取所需数据
    const $ = cheerio.load(result.text)
    const data = []
    $('#').each((idx, el) => {
      const $el = $(el)
      console.log(idx, el, $el)
    })
    return { success: true, data }
  } catch (err) {
    console.log(`获取页面数据失败！`)
    return { success: false, data: null }
  }
}


// exports.getWinning = getWinning
module.exports = getWinning