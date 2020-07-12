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
            callback(err)
        } else {
            callback(null, JSON.parse(data).userInfoList);
        }
    })
}

/**
 * 创建用户
 */
const createUser = () => {
    
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
