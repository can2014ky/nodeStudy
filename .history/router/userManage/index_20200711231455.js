const fs = require('fs');
const userManagerDataProcess = require('../../dataProcess/userManage/index');

// 方式一：(推荐)
const express = require('express');
// 1. 创建路由容器
const router = express.Router();
// 2. 把路由挂载到路由容器router上
router.get('/', (req, res) => {
    // utf8 或 data.toString() 将二进制数据转化成字符串
    // fs.readFile('./db.json', 'utf8', (err, data) => {
    //     console.log(666, err, data)
    //     if (err) {
    //         return res.status(500).send('server error');
    //     }
    //     const { userInfoList } = JSON.parse(data);
    //     res.render('index.html', {
    //         dashboardData: [
    //             { name: '李森', des: '大神' },
    //             { name: '徐兵', des: '大神' },
    //             { name: '周灿', des: '菜鸟' },
    //             { name: '周灿', des: '菜鸟' },
    //         ],
    //         userInfoList,
    //     })
    // })

    userManagerDataProcess.getUserList((err, data) => {
        if (err) {
            return res.status(500).send('server error');
        }
        res.render('index.html', {
            dashboardData: [
                { name: '李森', des: '大神' },
                { name: '徐兵', des: '大神' },
                { name: '周灿', des: '菜鸟' },
                { name: '周灿', des: '菜鸟' },
            ],
            userInfoList: data,
        })
    })
})
router.get('/user/create', (req, res) => {
    res.render('createUser.html')
})
router.post('/user/create', (req, res) => {
    console.log(666, req.body)
    const data = req.body;
    userManagerDataProcess.createUser(data, (err) => {
        if (err) {
            return res.status(500).send('server error');
        }
        res.redirect('/')
    })
})

// 3. 把 router 导出
module.exports = router;

// 方式二：
// module.exports = (app, fs) => {
//     app.get('/', (req, res) => {
//         // utf8 或 data.toString()
//         fs.readFile('./db.json', 'utf8', (err, data) => {
//             if (err) {
//                 return res.status(500).send('server error');
//             }
//             const { userInfoList } = JSON.parse(data);
//             res.render('index.html', {
//                 dashboardData: [
//                     { name: '李森', des: '大神' },
//                     { name: '徐兵', des: '大神' },
//                     { name: '周灿', des: '菜鸟' },
//                     { name: '周灿', des: '菜鸟' },
//                 ],
//                 userInfoList,
//             })
//         })
//     })
// }