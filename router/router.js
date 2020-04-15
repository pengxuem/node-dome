var express = require('express')

var router = express.Router()

// get方法请求首页
router.get('/', function(req, res){
    res.render('index.html', {
        data: 'hello!'
    })
})


router.get('/topics/new', function(req, res){
    res.render('login.html')
})
router.get('/login', function(req, res){
    res.render('login.html')
})
router.get('/register', function(req, res){
    res.render('register.html')
})



// 向外导出
module.exports = router
