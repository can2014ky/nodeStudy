const express = require('express');
const path = require('path');

const app = express();

// 1.静态资源服务:
// 访问路径public别名为空: http://localhost:3000/js/main.js
// app.use(express.static('./public/'));
 // 访问路径public别名为abc: http://localhost:3000/abc/js/main.js
// app.use('/abc/', express.static('./public/'));  
 // 访问路径public别名为public: http://localhost:3000/public/js/main.js
// app.use('/public/', express.static(path.resolve(__dirname, './public/')));
app.use('/public/', express.static('./public/')); // 推荐使用

// 2.配置 art-template 模板引擎
app.engine('html', require('express-art-template'));
app.set('views', '。/pubilc/')

// 3.路由：请求方法 + 请求路径 +  请求处理函数 
app.get('/', (req, res) => {
    res.render('index.html', {
        name: 'can2014ky',
    })
})
app.get('/about.js', (req, res) => {
    // req.query 获取get请求参数
    res.send('hello about !');
})

app.listen(3000, () => {
    console.log('App is running at 127.0.0.1:3000')
});