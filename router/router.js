var express = require('express')

var router = express.Router()

// get方法请求首页
router.get('/', function(req, res){
    res.render('index.html')
})

// 发表页面
router.get('/topics/new', function(req, res){
    res.render('login.html')
})

// 登录页面
router.get('/login', function(req, res){
    res.render('login.html')
})

// 注册页面
router.get('/register', function(req, res){
    res.render('register.html')
})

// 用户登录
router.post('/login', function(req, res){
    console.log(req.body)
    
})

// 用户注册
router.post('/register', function(req, res){
    console.log(req.body)
})



// 向外导出
module.exports = router
