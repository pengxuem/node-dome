var mongoose = require('mongoose')
// 连接数据库
mongoose.connect('mongodb://localhost/test')
var Schema = mongoose.Schema


var userSchema = new Schema({
    // 邮箱
    email: {
        type: String,
        required: true
    },
    // 用户名
    username: {
        type: String,
        required: true
    },
    // 密码
    password: {
        type: String,
        required: true
    },
    // 创建时间
    create_time: {
        type: Date,
        default: Date.now
    },
    last_mod_time: {
        type: Date,
        default: Date.now
    },
    avater: {
        type: String,
        default: '/public/img/cat.jpg'
    },
    // 介绍
    bio: {
        type: String,
        default: ''
    },
    // 性别
    gender: {
        type: Number,
        enum: [-1, 0, 1]
    },
    // 生日
    birthday: {
        type: Date
    },
    // 权限状态
    status: {
        type: Number,
        // 是否可以评论/登录 0: 正常  1: 不可以评论   2: 不可以登录
        enum: [0, 1, 2],
        default: 0
    }

})

module.exports = mongoose.model('User', userSchema)