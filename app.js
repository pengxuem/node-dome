var express = require('express')
var path = require('path')
var bodyParser = require('body-parser')


var app = express()


app.use('/public/', express.static(path.join(__dirname, './public')))
app.use('/node_modules/', express.static(path.join(__dirname, './node_modules')))


app.get('', function(req, res){
    res.send('hello!')
})

app.listen(3000, function(){
    console.log('express 3000 app is running...')
})
