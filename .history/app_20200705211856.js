const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();

// 1.静态资源服务:
// 访问路径public别名为空: http://localhost:3000/js/main.js
// app.use(express.static('./public/'));
 // 访问路径public别名为abc: http://localhost:3000/abc/js/main.js
// app.use('/abc/', express.static('./public/'));  
 // 访问路径public别名为public: http://localhost:3000/public/js/main.js
// app.use('/public/', express.static(path.resolve(__dirname, './public/')));
app.use('/public/', express.static('./public/')); // 推荐使用
app.use('/node_modules/', express.static('./node_modules/'));

// 2.配置 art-template 模板引擎
app.engine('html', require('express-art-template'));
// app.set('views', path.resolve(__dirname, './public/'))

// 3. 配置解析 post 参数的插件, 上方已引入插件 req.body获取参数
app.use(bodyParser.urlencoded({ extended: false }));

// 4.路由：请求方法 + 请求路径 +  请求处理函数 
app.get('/', (req, res) => {
    fs.readFile('./db.json', 'utf8', (err, data) => {
        if (err) {
            return res.status(500).send('server error');
        }
        const { userInfoList } = JSON.parse(data);
    })
    res.render('index.html', {
        dashboardData: [
            { name: '李森', des: '大神' },
            { name: '徐兵', des: '大神' },
            { name: '周灿', des: '菜鸟' },
            { name: '周灿', des: '菜鸟' },
        ],
        userInfoList: userInfoList,
    })
    // res.send('hello world !!!');
})

app.listen(3000, () => {
    console.log('App is running at 127.0.0.1:3000')
});