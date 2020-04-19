
var express = require('express')
var path = require('path')
var bodyParser = require('body-parser')
var session = require('express-session')
var router = require('./router/router')


var app = express()

// 暴露公共资源
app.use('/public/', express.static(path.join(__dirname, './public')))
app.use('/node_modules/', express.static(path.join(__dirname, './node_modules')))
app.use('/views/', express.static(path.join(__dirname, './views')))


// 获取post请的参数
app.use(bodyParser.urlencoded({extenden: false}))
app.use(bodyParser.json())

// art模板引擎
app.engine('html', require('express-art-template'))

// 配置使用session
app.use(session({
    secret: 'pxm',
    resave: false,
    saveUninitialized: true
}))

// 挂载路由容器到app服务中
app.use(router)


// app.get('', function(req, res){
//     res.render('index.html', {
//         data: 'hello!'
//     })
// })

// 创建一个 8888 端口号的服务
app.listen(8888, function(){
    console.log('express 8888 app is running...')
})

