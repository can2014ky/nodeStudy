// 安装数据库第三方插件 npm install --save mongoose

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// 1、连接数据库，数据可以不存在，在创建第一条数据后会自动被创建
mongoose.connect('mongodb://localhost/userList');

// 2、设计文档结构 (表结构)
const userSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    gender: {
        type: Number,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    industry: {
        type: String,
    },
    hobby: {
        type: String,
    },
});

// 3、将文档结构发布为模型
/**
 * {String} 首字目大写的数据库名称User, 会自动转换成 users 集合名称
 * {Object} 架构 Schema
 * 返回值 构造函数
 */
const User = mongoose.model('User', userSchema);

// 4、操作 User 集合中的数据
// 4.1）新增
const newUser = new User({
    name: 'lisen',
    gender: 0,
    age: 18,
    industry: 'IT',
    hobby: 'study'
})
// 持久化存储
newUser.save((err, res) => {
    if (err) {
        console.log('保存失败！');
    } else {
        console.log('保存成功！', res);
    }
});

// 4.2）查询
// User.find((err, res) => {
//     if (err) {
//         console.log('查询失败！')
//     } else {
//         console.log('查询成功！', res);
//     }
// })