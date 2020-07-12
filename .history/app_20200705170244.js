const express = require('express');
const { send } = require('process');

const app = express();

// 静态资源
app.use('/public/', express.static('./public/'));

// 路由：请求方法 + 请求路径 +  请求处理函数 
app.get('/', (req, res) => {
    res.send('hello world !');
})
app.get('/about', (req, res) => {
    // req.query 获取get请求参数
    res.send('hello about !');
})

app.listen(3000, () => {
    console.log('App is running at 127.0.0.1:3000')
});