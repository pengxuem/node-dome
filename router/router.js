var express = require('express')
var User = require('../models/user')
var MD5 = require('blueimp-md5')
var router = express.Router()

// get方法请求首页
router.get('/', function (req, res) {
    res.render('index.html', {
        user: req.session.user
    })
})

// 发表页面
router.get('/topics/new', function (req, res) {
    res.render('login.html')
})

// 登录页面
router.get('/login', function (req, res) {
    res.render('login.html')
})

// 注册页面
router.get('/register', function (req, res) {
    res.render('register.html')
})

// 用户登录
router.post('/login', function (req, res) {
    var body = req.body
    User.findOne({
        username: body.username,
        password: MD5(MD5(body.password))
    }, function (err, user) {

        if (err) {
            return res.status(500).json({
                err_code: 500,
                message: 'server Error'
            })
        }

        if (!user) {
            return res.status(200).json({
                err_code: 1,
                message: '邮箱或密码错误'
            })
        }

        req.session.user = user
        return res.status(200).json({
            err_code: 0,
            message: 'OK'
        })
    })
})

// 用户注册
router.post('/register', function (req, res) {
    var body = req.body
    User.findOne({
        $or: [
            {
                email: body.email
            },
            {
                username: body.username
            }
        ]
    }, function (err, data) {
        if (err) {
            return res.status(500).json({
                err_code: 500,
                message: 'Server Error'
            })
        }
        if (data) {
            return res.status(200).json({
                err_code: 1,
                message: '邮箱或昵称已存在'
            })
        }

        body.password = MD5(MD5(body.password))
        new User(body).save(function (err, user) {
            if (err) {
                return res.status(500).json({
                    err_code: 500,
                    message: '服务器错误'
                })
            }

            // 使用session记录登录状态
            req.session.user = user

            res.status(200).json({
                err_code: 0,
                message: 'ok'
            })
            // 服务端重定向只针对于同步请求有效，异步请求无效
            // res.redirect('/')
        })

    })
})

// 用户退出
router.get('/logout', function (req, res) {
    req.session.user = null
    res.redirect('/login')
})



// 向外导出
module.exports = router
