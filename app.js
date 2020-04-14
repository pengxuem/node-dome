
var express = require('express')
var path = require('path')
var bodyParser = require('body-parser')


var app = express()

// 暴露公共资源
app.use('/public/', express.static(path.join(__dirname, './public')))
app.use('/node_modules/', express.static(path.join(__dirname, './node_modules')))
app.use('/views/', express.static(path.join(__dirname, './views')))


// 获取post请的参数
app.use(bodyParser.urlencoded({extenden: false}))
app.use(bodyParser.json())

// art模板
app.engine('html', require('express-art-template'))


app.get('', function(req, res){
    res.render('index.html', {
        data: 'hello!'
    })
})


app.listen(8888, function(){
    console.log('express 8888 app is running...')
})

































