const app = require('./config/koa')
const http = require('http')
const task = require('./task/index')

// 创建定时任务
task.createTask()

// 创建服务
const port = 9000
http.createServer(app.callback())
	.listen(port)
	.on('listening', function () {
		console.log('server listening on: ' + port)
	})