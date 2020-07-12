const fs = require('fs');

// 方式一：(推荐)
const express = require('express');

const router = express.router()

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