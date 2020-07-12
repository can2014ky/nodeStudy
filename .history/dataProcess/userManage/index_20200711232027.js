// 操作数据的 API 文件模块

const fs = require('fs');
const path = require('path');

const dbPath = path.resolve(__dirname, '../../db.json');

/**
 * 获取用户列表
 */
// 传入回调函数，来获取异步处理的数据结果
const getUserList = (callback) => {
    fs.readFile(dbPath, 'utf8', (err, data) => {
        if (err) {
            return callback(err)
        } else {
            callback(null, JSON.parse(data).userInfoList);
        }
    })
}

/**
 * 创建用户
 */
const createUser = (data, callback) => {
    fs.readFile(dbPath, 'utf8', (err, data) => {
        if (err) {
            return callback(err)
        } else {
            console.log(999, data)
            const userInfoList = JSON.parse(data).userInfoList;
            data.id = userInfoList.length;
            userInfoList.push(data);
            const resultData = JSON.stringify({
                userInfoList
            });
            console.log(888, userInfoList)
            fs.writeFile(dbPath, resultData, (err) => {
                if (err) {
                    return callback(err);
                } else {
                    callback(null);
                }
            })
        }
    })
}

/**
 * 更新用户信息
 */
const updateUser = () => {
    
}

/**
 * 删除用户
 */
const deleteUser = () => {
    
}

module.exports = {
    getUserList,
    createUser,
    updateUser,
    deleteUser
}
