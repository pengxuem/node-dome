var express = require('express')

var router = express.Router()

// get方法请求首页
router.get('/', function(req, res){
    res.render('index.html', {
        data: 'hello!'
    })
})














// 向外导出
module.exports = router
