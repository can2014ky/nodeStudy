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
        type: String,
        required: true,
    },
    industry: {
        type: String,
    },
    hobby: {
        type: String,
    },
});