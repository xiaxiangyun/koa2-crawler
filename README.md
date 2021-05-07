# koa2-crawler

本项目采用[koa](https://github.com/koajs/koa)框架搭建，实现小程序数据爬取及接口服务功能。

>  项目插件相关文档：
>
>  [koa](https://koa.bootcss.com/)、[moment](http://momentjs.cn/)、[superagent](https://visionmedia.github.io/superagent/)、[sequelize](https://www.sequelize.com.cn/)、[koa-redis](https://www.npmjs.com/package/koa-redis)、[node-schedule](https://www.npmjs.com/package/node-schedule)、[pm2]()

## 目录

- [安装](#安装)
- [使用](#使用)
- [配置项](#配置项)
- [项目结构](#项目结构)
- [历史](#历史)
- [开发者](#开发者)

## 安装

```javascript
yarn install // 安装依赖
yarn upgrade-interactive // 更新所有依赖
```

## 使用

```javascript
yarn start
```

## 配置项




## 项目结构

```javascript
├── config 			  // 配置相关
├── controllers 	// 控制器
├── modules 		  // 实体模型
├── routes 			  // 路由
├── schema 			  // 数据库表实例
├── task 			    // 定时任务
├── app.js 			  // 项目入口
```

## 历史

- 20210305：项目开发

## 开发者

[@Leayh](https://github.com/xiaxiangyun)

## License

MIT © 2021